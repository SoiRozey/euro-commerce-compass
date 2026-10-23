import type { Currency } from "@/lib/i18n";

// One sign-up / checkout link per currency. Replace "#join" with the real
// links (they can also all point to the same checkout if that provider
// handles the currency itself).
export const SIGNUP_URLS: Record<Currency, string> = {
  EUR: "#join",
  USD: "#join",
  GBP: "#join",
};
