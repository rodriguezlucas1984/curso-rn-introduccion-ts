import { useState } from "react";

export const useCounter = (inicio: number = 0) => {
  const [valor, setValor] = useState(inicio);

  const acumular = (incremento: number = 1) => {
    setValor(valor + incremento);
  };

  return {
    valor,
    acumular,
  };
};
