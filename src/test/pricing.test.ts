import { describe, expect, it } from "vitest";
import { DICT, fmtMoney, localize } from "@/lib/i18n";

describe("flat multi-currency pricing", () => {
  it("offer price is always 247 in every currency", () => {
    expect(fmtMoney("247", "en", "EUR")).toBe("€247");
    expect(fmtMoney("247", "en", "USD")).toBe("$247");
    expect(fmtMoney("247", "en", "GBP")).toBe("£247");
  });

  it("anchor value is always 5,000 in every currency", () => {
    expect(fmtMoney("5000", "en", "EUR")).toBe("€5,000");
    expect(fmtMoney("5000", "en", "USD")).toBe("$5,000");
    expect(fmtMoney("5000", "en", "GBP")).toBe("£5,000");
  });

  it("formats per language convention", () => {
    expect(fmtMoney("247", "de", "EUR")).toBe("247 €");
    expect(fmtMoney("5000", "de", "USD")).toBe("5.000 $");
    expect(fmtMoney("5000", "fr", "EUR")).toBe("5 000 €");
  });

  it("resolves every price token in the dict, with no hardcoded euro signs left", () => {
    const en = localize(
      { hero: "one-time {P}", vs: "{A} – {T} upfront", sym: "{SYM}100K+", extra: "{SYM}15K and {SYM}1K to {SYM}2K" },
      "en",
      "GBP"
    );
    expect(en).toEqual({ hero: "one-time £247", vs: "£5,000 – £10,000 upfront", sym: "£100K+", extra: "£15K and £1K to £2K" });
    expect(JSON.stringify(DICT)).not.toContain("€");
    for (const lang of ["nl", "en", "de", "fr", "es"] as const) {
      const resolved = JSON.stringify(localize(DICT[lang], lang, "EUR"));
      expect(resolved).not.toMatch(/\{[A-Z]+\}/);
    }
  });
});
