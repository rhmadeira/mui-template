const currency = (value: number | string | undefined) => {
  if (!value) return "";
  const valor = Number(value);
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  });
};

const currencyNoSymbol = (value: number | string) => {
  const valor = Number(value);
  return valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
};

export const convert = {
  currency,
  currencyNoSymbol,
};
