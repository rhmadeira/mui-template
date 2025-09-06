// --- Formatadores --- //
/** 1234.5 -> "1.234,50" */
export function numberToMoneyString(
  value?: number | null,
  opts: { fractionDigits?: number } = {}
): string {
  if (value === undefined || value === null || isNaN(value)) return "";
  const { fractionDigits = 2 } = opts;
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

/**
 * 0.125 -> "12,50 %"    (scale 'unit': 0..1)
 * 12.5  -> "12,50 %"    (scale 'hundred': 0..100)
 */
export function numberToPercentString(
  value?: number | null,
  opts: {
    fractionDigits?: number;
    scale?: "unit" | "hundred";
    withSymbol?: boolean;
  } = {}
): string {
  if (value === undefined || value === null || isNaN(value)) return "";
  const { fractionDigits = 2, scale = "unit", withSymbol = true } = opts;
  const shown = scale === "unit" ? value * 100 : value;
  const base = shown.toLocaleString("pt-BR", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
  return withSymbol ? `${base} %` : base;
}

// --- Parsers --- //

/**
 * "R$ 1.234,56" -> 1234.56
 * "12,5 %"      -> 12.5   (por padrão, % vira número "cheio", não unidade)
 * ""/undefined  -> defaultValue (0 por padrão)
 *
 * Se quiser que "12,5%" vire 0.125, use `{ percentAsUnit: true }`.
 */
export function moneyStringToNumber(
  value?: string | null,
  opts: { defaultValue?: number; percentAsUnit?: boolean } = {}
): number {
  const { defaultValue = 0, percentAsUnit = false } = opts;
  if (!value) return defaultValue;

  const raw = String(value)
    .trim()
    .replace(/[^\d.,-]/g, "")
    .replace(/(?!^)-/g, "");

  if (!raw) return defaultValue;

  const hadPercent = /%/.test(String(value));

  const normalized = raw.replace(/\./g, "").replace(",", ".");

  const n = Number(normalized);
  if (Number.isNaN(n)) return defaultValue;

  if (hadPercent && percentAsUnit) {
    // "12,5%" -> 0.125 quando percentAsUnit=true
    return n / 100;
  }
  return n;
}

export function numberToLocalizedString(
  value?: number | null,
  opts: { fractionDigits?: number } = {}
): string {
  if (value === undefined || value === null || isNaN(value)) return "";
  const { fractionDigits = 2 } = opts;
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

// Função para verificar se um valor é negativo
export const valueIsNegative = (value: string): boolean => {
  const cleaned = value.replace(/[^\d-]/g, "");
  return cleaned.startsWith("-");
};
