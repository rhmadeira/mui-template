const cnpj = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

const cpf = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

const phone = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    .replace(/(-\d{4})\d+?$/, "$1");
};

const cep = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
};

function currency(valor: string) {
  const formattedValue = valor
    .replace(/[^0-9-]/g, "")
    .replace(/(\d)(\d{2})$/, "$1,$2")
    .replace(/(?=(\d{3})+(\D))\B/g, ".");

  return formattedValue;
}

function revertCurrency(valor: string) {
  const valueReverted = valor.replace(".", "").replace(",", ".");
  return valueReverted;
}

function percent(valor: string) {
  if (Number(valor) > 100) {
    return "100";
  } else {
    return `${valor}`;
  }
}

export const mask = {
  cnpj,
  cpf,
  phone,
  cep,
  currency,
  revertCurrency,
  percent,
};
