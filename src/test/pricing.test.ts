import { describe, expect, it } from "vitest";
import { DICT, currencyForCountry, fmtMoney, langForCountry, localize } from "@/lib/i18n";
import { SIGNUP_URLS, signupUrlFor } from "@/lib/site";

describe("flat multi-currency pricing", () => {
  it("offer price is always 297 in every currency and language", () => {
    for (const lang of ["nl", "en", "en-us", "en-ca", "de", "fr", "es"] as const) {
      for (const currency of ["EUR", "USD", "GBP"] as const) {
        expect(localize("{P}", lang, currency)).toBe(fmtMoney("297", lang, currency));
      }
    }
    expect(localize("{P}", "en", "EUR")).toBe("€297");
    expect(localize("{P}", "en", "USD")).toBe("$297");
    expect(localize("{P}", "en", "GBP")).toBe("£297");
  });

  it("anchor value is always 14,850 in every currency", () => {
    expect(fmtMoney("14850", "en", "EUR")).toBe("€14,850");
    expect(fmtMoney("14850", "en", "USD")).toBe("$14,850");
    expect(fmtMoney("14850", "en", "GBP")).toBe("£14,850");
  });

  it("formats per language convention", () => {
    expect(fmtMoney("297", "de", "EUR")).toBe("297 €");
    expect(fmtMoney("14850", "de", "USD")).toBe("14.850 $");
    expect(fmtMoney("14850", "fr", "EUR")).toBe("14 850 €");
  });

  it("resolves every price token in the dict, with no hardcoded euro signs left", () => {
    const en = localize(
      { hero: "one-time {P}", vs: "{A} – {T} upfront", sym: "{SYM}100K+", extra: "{SYM}15K and {SYM}1K to {SYM}2K", val: "worth {V1} to {V2}, total {VT}" },
      "en",
      "GBP"
    );
    expect(en).toEqual({ hero: "one-time £297", vs: "£14,850 – £10,000 upfront", sym: "£100K+", extra: "£15K and £1K to £2K", val: "worth £2,997 to £9,597, total £20,279" });
    expect(JSON.stringify(DICT)).not.toContain("€");
    for (const lang of ["nl", "en", "de", "fr", "es"] as const) {
      const resolved = JSON.stringify(localize(DICT[lang], lang, "EUR"));
      expect(resolved).not.toMatch(/\{[A-Z0-9]+\}/);
    }
  });

  it("pricing card shows the 14,850 anchor, the item values and the 20,279 total", () => {
    for (const lang of ["nl", "en", "de", "fr", "es"] as const) {
      const t = localize(DICT[lang], lang, "EUR");
      expect(t.includesTotal).toMatch(/20[.,\s]279/);
      expect(t.includes.some(([, v]) => /2[.,\s]997\s*€?/.test(v))).toBe(true);
      expect(t.includes.some(([, v]) => /497\s*€?/.test(v))).toBe(true);
      expect(t.value).not.toMatch(/\{[A-Z0-9]+\}/);
      // value column sits on the right: every item is a [label, value] pair
      for (const [label, v] of t.includes) {
        expect(typeof label).toBe("string");
        expect(label.length).toBeGreaterThan(0);
        expect(typeof v).toBe("string");
      }
    }
  });

  it("the elite network value is 9,597 in every currency and language", () => {
    for (const lang of ["nl", "en", "en-us", "en-ca", "de", "fr", "es"] as const) {
      for (const currency of ["EUR", "USD", "GBP"] as const) {
        const t = localize(DICT[lang], lang, currency);
        expect(t.includes[1]?.[1]).toContain(fmtMoney("9597", lang, currency));
      }
    }
  });

  it("total value equals the sum of all included item values", () => {
    const t = localize(DICT.en, "en", "EUR");
    const sum = t.includes.reduce((total, [, value]) => total + Number(value.replace(/\D/g, "")), 0);
    expect(sum).toBe(20279);
    expect(Number(t.includesTotal.replace(/\D/g, ""))).toBe(sum);
  });

  it("the Dutch value line mentions savings, expertise, connections and direct help", () => {
    const nl = localize(DICT.nl, "nl", "EUR");
    expect(nl.value).toContain("besparingen");
    expect(nl.value).toContain("expertise");
    expect(nl.value).toContain("connecties");
  });

  it("the Dutch headline and lifetime wording use the requested phrasing", () => {
    const nl = localize(DICT.nl, "nl", "EUR");
    expect(nl.vsTitle).toBe("Waarom je die €14.850+ in je eigen business moet steken — en niet in een coach");
    expect(nl.pricingTitle).toBe("Lifetime toegang");
    expect(nl.includes.some(([label]) => label.includes("Lifetime toegang tot de videocursus"))).toBe(true);
    expect(nl.includes.some(([label]) => label.includes("Levenslange"))).toBe(false);
  });
});

describe("automatic country detection", () => {
  it("maps countries to the right currency", () => {
    expect(currencyForCountry("NL")).toBe("EUR");
    expect(currencyForCountry("DE")).toBe("EUR");
    expect(currencyForCountry("GB")).toBe("GBP");
    expect(currencyForCountry("US")).toBe("USD");
    expect(currencyForCountry("CA")).toBe("USD");
  });

  it("maps countries to the right language", () => {
    expect(langForCountry("NL")).toBe("nl");
    expect(langForCountry("GB")).toBe("en");
    expect(langForCountry("US")).toBe("en-us");
    expect(langForCountry("CA")).toBe("en-ca");
  });

  it("countries outside the regional versions get US English and USD", () => {
    expect(langForCountry("TH")).toBe("en-us");
    expect(currencyForCountry("TH")).toBe("USD");
    expect(langForCountry("AE")).toBe("en-us");
    expect(currencyForCountry("AE")).toBe("USD");
    expect(langForCountry("AU")).toBe("en-us");
    expect(currencyForCountry("AU")).toBe("USD");
  });
});

describe("per-country and per-currency signup links", () => {
  it("falls back to the currency link when no country link exists", () => {
    expect(signupUrlFor("US", "USD")).toBe(SIGNUP_URLS.USD);
    expect(signupUrlFor("GB", "GBP")).toBe(SIGNUP_URLS.GBP);
    expect(signupUrlFor("NL", "EUR")).toBe(SIGNUP_URLS.EUR);
  });

  it("works without a known country too", () => {
    expect(signupUrlFor(null, "EUR")).toBe(SIGNUP_URLS.EUR);
  });

  it("sends NL to the Benelux checkout, GB to the UK checkout and everyone else to the US checkout", () => {
    expect(signupUrlFor("NL", "EUR")).toBe("https://whop.com/90daysecom-com/benelux-03-3da6/");
    expect(signupUrlFor("GB", "GBP")).toBe("https://whop.com/90daysecom-com/90-days-ecom-uk/");
    expect(signupUrlFor("US", "USD")).toBe("https://whop.com/90daysecom-com/90-days-ecom-millionaires-us/");
    expect(signupUrlFor("CA", "USD")).toBe("https://whop.com/90daysecom-com/90-days-ecom-millionaires-us/");
    expect(signupUrlFor("TH", "USD")).toBe("https://whop.com/90daysecom-com/90-days-ecom-millionaires-us/");
    // euro countries outside NL still get the US checkout, even though they see euro prices
    expect(signupUrlFor("DE", "EUR")).toBe("https://whop.com/90daysecom-com/90-days-ecom-millionaires-us/");
    expect(signupUrlFor("FR", "EUR")).toBe("https://whop.com/90daysecom-com/90-days-ecom-millionaires-us/");
    expect(signupUrlFor("ES", "EUR")).toBe("https://whop.com/90daysecom-com/90-days-ecom-millionaires-us/");
  });

  it("falls back on the currency link only when the country is unknown", () => {
    expect(signupUrlFor(null, "EUR")).toBe("https://whop.com/90daysecom-com/benelux-03-3da6/");
    expect(signupUrlFor(null, "GBP")).toBe("https://whop.com/90daysecom-com/90-days-ecom-uk/");
    expect(signupUrlFor(null, "USD")).toBe("https://whop.com/90daysecom-com/90-days-ecom-millionaires-us/");
  });
});
