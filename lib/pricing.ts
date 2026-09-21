/**
 * Country-aware pricing.
 *
 * USD is the single source of truth. Every other market is derived from it in
 * one of two ways:
 *
 *   1. MARKET_OVERRIDES — a deliberate, human-chosen price for that market.
 *      Always wins. Use this wherever the market justifies a different price
 *      point rather than an exchange-rate translation.
 *   2. Fixed-rate conversion + rounding — the fallback, so every locale renders
 *      a sensible number before the overrides are filled in.
 *
 * Rates are FIXED ON PURPOSE. No FX API: prices must not drift under a client
 * mid-quote, and rounding stays under our control (so we ship ₹85,000, never
 * ₹83,247). Review them on the cadence noted in RATES_REVIEWED below.
 */

export const LOCALES = ["us", "gb", "au", "ca", "in", "ae", "sa", "sg", "de", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "us";

type CurrencyCode = "USD" | "GBP" | "EUR" | "AUD" | "CAD" | "INR" | "AED" | "SAR" | "SGD";

interface Currency {
  code: CurrencyCode;
  symbol: string;
  /** Symbol before the number (true) or after with a space (false). */
  prefix: boolean;
  /** USD -> this currency. Fixed; see RATES_REVIEWED. */
  rate: number;
  /** Minimum rounding step. The real step also scales with magnitude — see roundUp(). */
  roundTo: number;
  /** Locale tag used for digit grouping (India groups as 1,00,000). */
  numberLocale: string;
}

/**
 * Last reviewed: 2026-09-21.
 * AED (3.6725) and SAR (3.75) are USD-pegged and effectively stable.
 * The rest float — re-check these before a pricing push.
 */
export const RATES_REVIEWED = "2026-09-21";

const CURRENCIES: Record<CurrencyCode, Currency> = {
  USD: { code: "USD", symbol: "$",   prefix: true,  rate: 1,      roundTo: 50,   numberLocale: "en-US" },
  GBP: { code: "GBP", symbol: "£",   prefix: true,  rate: 0.79,   roundTo: 50,   numberLocale: "en-GB" },
  EUR: { code: "EUR", symbol: "€",   prefix: true,  rate: 0.92,   roundTo: 50,   numberLocale: "de-DE" },
  AUD: { code: "AUD", symbol: "A$",  prefix: true,  rate: 1.52,   roundTo: 50,   numberLocale: "en-AU" },
  CAD: { code: "CAD", symbol: "C$",  prefix: true,  rate: 1.36,   roundTo: 50,   numberLocale: "en-CA" },
  SGD: { code: "SGD", symbol: "S$",  prefix: true,  rate: 1.34,   roundTo: 50,   numberLocale: "en-SG" },
  AED: { code: "AED", symbol: "AED", prefix: true,  rate: 3.6725, roundTo: 500,  numberLocale: "en-AE" },
  SAR: { code: "SAR", symbol: "SAR", prefix: true,  rate: 3.75,   roundTo: 500,  numberLocale: "en-SA" },
  INR: { code: "INR", symbol: "₹",   prefix: true,  rate: 83.5,   roundTo: 5000, numberLocale: "en-IN" },
};

const LOCALE_CURRENCY: Record<Locale, CurrencyCode> = {
  us: "USD",
  gb: "GBP",
  au: "AUD",
  ca: "CAD",
  in: "INR",
  ae: "AED",
  sa: "SAR",
  sg: "SGD",
  de: "EUR",
  fr: "EUR",
};

/**
 * Deliberate per-market prices, keyed by the USD base price they replace.
 *
 * EMPTY BY DESIGN. Everything currently falls back to fixed-rate conversion,
 * which is a translation of the USD price, not a market decision. Fill a market
 * in here when you want a real price point for it, e.g.:
 *
 *   in: { 1000: 65000, 3500: 225000 },
 *
 * Numbers here are used verbatim — no conversion, no rounding.
 */
const MARKET_OVERRIDES: Partial<Record<Locale, Record<number, number>>> = {
  // in: { ... },
  // ae: { ... },
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function currencyFor(locale: Locale): Currency {
  return CURRENCIES[LOCALE_CURRENCY[locale]];
}

/**
 * Round up to a "nice" number, with the step scaling by magnitude.
 *
 * A flat step is wrong at both ends: rounding $300 -> £237 up to a 100 step
 * gives £300, a 26% markup the USD price never intended, while a step small
 * enough for £237 leaves £9,483 looking like a calculation rather than a price.
 * `minStep` is the currency's floor (pegged/high-denomination currencies set a
 * larger one); magnitude decides the rest.
 */
function roundUp(value: number, minStep: number): number {
  const step = Math.max(
    minStep,
    value < 1_000    ? 50    :
    value < 5_000    ? 100   :
    value < 20_000   ? 500   :
    value < 100_000  ? 1_000 :
                       5_000
  );
  return Math.ceil(value / step) * step;
}

/** Resolve the numeric amount for a USD base price in one market. */
export function amountFor(usd: number, locale: Locale): number {
  const override = MARKET_OVERRIDES[locale]?.[usd];
  if (typeof override === "number") return override;

  const { rate, roundTo } = currencyFor(locale);
  if (rate === 1) return usd;
  return roundUp(usd * rate, roundTo);
}

/** True when this price came from a human decision rather than the FX fallback. */
export function isOverride(usd: number, locale: Locale): boolean {
  return typeof MARKET_OVERRIDES[locale]?.[usd] === "number";
}

/**
 * Format a USD base price for one market, e.g. formatPrice(1000, "in") -> "₹85,000".
 * Non-numeric prices (the "Custom" tier) are passed straight through by the caller.
 */
export function formatPrice(usd: number, locale: Locale): string {
  const { symbol, prefix, numberLocale } = currencyFor(locale);
  const amount = amountFor(usd, locale);
  const digits = new Intl.NumberFormat(numberLocale, { maximumFractionDigits: 0 }).format(amount);
  return prefix ? `${symbol}${digits}` : `${digits} ${symbol}`;
}
