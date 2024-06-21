const email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
const phone = /^\([1-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
const cpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const cnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
const cep = /^\d{5}-\d{3}$/;
const date = /^\d{2}\/\d{2}\/\d{4}$/;
const hour = /^\d{2}:\d{2}$/;
const number = /^\d+$/;
const decimal = /^\d+\.\d+$/;

// enter, espaço, vírgula, ponto e vírgula.
const specialCharacters = /[\s,;]+/;

export const regex = {
  email,
  password,
  phone,
  cpf,
  cnpj,
  cep,
  date,
  hour,
  number,
  decimal,
  specialCharacters,
};
