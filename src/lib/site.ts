import type { Currency } from "@/lib/i18n";

// One sign-up / checkout link per currency (fallback). Replace "#join" with
// the real links.
export const SIGNUP_URLS: Record<Currency, string> = {
  EUR: "#join",
  USD: "#join",
  GBP: "#join",
};

// Optional: one link per country, overriding the currency link. Fill in only
// the countries that have their own checkout; every other country falls back
// to the currency link above (e.g. US -> USD, GB -> GBP, NL -> EUR).
export const SIGNUP_URLS_BY_COUNTRY: Record<string, string> = {
  // GB: "https://...",
  // US: "https://...",
  // NL: "https://...",
};

export function signupUrlFor(country: string | null, currency: Currency): string {
  if (country) {
    const perCountry = SIGNUP_URLS_BY_COUNTRY[country.toUpperCase()];
    if (perCountry) return perCountry;
  }
  return SIGNUP_URLS[currency];
}
