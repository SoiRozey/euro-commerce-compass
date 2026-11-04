import { describe, expect, it } from "vitest";
import { DICT, currencyForCountry, fmtMoney, langForCountry, localize } from "@/lib/i18n";
import { SIGNUP_URLS, signupUrlFor } from "@/lib/site";

describe("flat multi-currency pricing", () => {
  it("offer price is always 247 in every currency", () => {
    expect(fmtMoney("247", "en", "EUR")).toBe("€247");
    expect(fmtMoney("247", "en", "USD")).toBe("$247");
    expect(fmtMoney("247", "en", "GBP")).toBe("£247");
  });

  it("anchor value is always 7,000 in every currency", () => {
    expect(fmtMoney("7000", "en", "EUR")).toBe("€7,000");
    expect(fmtMoney("7000", "en", "USD")).toBe("$7,000");
    expect(fmtMoney("7000", "en", "GBP")).toBe("£7,000");
  });

  it("formats per language convention", () => {
    expect(fmtMoney("247", "de", "EUR")).toBe("247 €");
    expect(fmtMoney("7000", "de", "USD")).toBe("7.000 $");
    expect(fmtMoney("7000", "fr", "EUR")).toBe("7 000 €");
  });

  it("resolves every price token in the dict, with no hardcoded euro signs left", () => {
    const en = localize(
      { hero: "one-time {P}", vs: "{A} – {T} upfront", sym: "{SYM}100K+", extra: "{SYM}15K and {SYM}1K to {SYM}2K", val: "worth {V1} to {V2}, total {VT}" },
      "en",
      "GBP"
    );
    expect(en).toEqual({ hero: "one-time £247", vs: "£7,000 – £10,000 upfront", sym: "£100K+", extra: "£15K and £1K to £2K", val: "worth £2,997 to £4,497, total £15,179" });
    expect(JSON.stringify(DICT)).not.toContain("€");
    for (const lang of ["nl", "en", "de", "fr", "es"] as const) {
      const resolved = JSON.stringify(localize(DICT[lang], lang, "EUR"));
      expect(resolved).not.toMatch(/\{[A-Z0-9]+\}/);
    }
  });

  it("pricing card shows the 7,000 anchor, the item values and the 15,179 total", () => {
    for (const lang of ["nl", "en", "de", "fr", "es"] as const) {
      const t = localize(DICT[lang], lang, "EUR");
      expect(t.includesTotal).toMatch(/15[.,]179/);
      expect(t.includes.some(([, v]) => /2[.,\s]997\s*€?/.test(v))).toBe(true);
      expect(t.includes.some(([, v]) => v.includes("€497"))).toBe(true);
      expect(t.value).not.toMatch(/\{[A-Z0-9]+\}/);
      // value column sits on the right: every item is a [label, value] pair
      for (const [label, v] of t.includes) {
        expect(typeof label).toBe("string");
        expect(label.length).toBeGreaterThan(0);
        expect(typeof v).toBe("string");
      }
    }
  });

  it("the Dutch value line mentions savings, expertise, connections and direct help", () => {
    const nl = localize(DICT.nl, "nl", "EUR");
    expect(nl.value).toContain("besparingen");
    expect(nl.value).toContain("expertise");
    expect(nl.value).toContain("connecties");
  });

  it("the Dutch headline and lifetime wording use the requested phrasing", () => {
    const nl = localize(DICT.nl, "nl", "EUR");
    expect(nl.vsTitle).toBe("Waarom je die €7.000+ in je eigen business moet steken — en niet in een coach");
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
});
