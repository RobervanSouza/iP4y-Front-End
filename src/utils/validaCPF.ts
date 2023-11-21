import cpfCheck from "cpf-check";
import { useState } from "react";
  const [isValidCPF, setIsValidCPF] = useState(true);

export  const validataCPF = (cpf: string) => {
  const isValid = cpfCheck.validate(cpf);
  setIsValidCPF(isValid);
  return isValid;
};

export const formataCPF = (cpf) => {
  const numericCPF = cpf.replace(/[^\d]/g, "");

  if (numericCPF.length <= 11) {
    return numericCPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  }

  return cpf;
};
