import type { Currency } from "@/lib/i18n";

// The three real Whop checkouts: Benelux, UK and US/international.
const WHOP_BENELUX = "https://whop.com/90daysecom-com/benelux-03-3da6/";
const WHOP_UK = "https://whop.com/90daysecom-com/90-days-ecom-uk/";
const WHOP_US = "https://whop.com/90daysecom-com/90-days-ecom-millionaires-us/";

// Fallback when the visitor's country is unknown: the currency decides.
export const SIGNUP_URLS: Record<Currency, string> = {
  EUR: WHOP_BENELUX,
  USD: WHOP_US,
  GBP: WHOP_UK,
};

// Countries with their own checkout. Every other country falls through to
// the US/international link.
export const SIGNUP_URLS_BY_COUNTRY: Record<string, string> = {
  NL: WHOP_BENELUX,
  GB: WHOP_UK,
};

export function signupUrlFor(country: string | null, currency: Currency): string {
  if (country) {
    const perCountry = SIGNUP_URLS_BY_COUNTRY[country.toUpperCase()];
    return perCountry ?? WHOP_US;
  }
  return SIGNUP_URLS[currency];
}
