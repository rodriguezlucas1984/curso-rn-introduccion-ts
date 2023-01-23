import { useState } from "react";

export const useForms = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  const onChange = (valor: string, campo: keyof T) => {
    setState({ ...state, [campo]: valor });
  };

  return { formulario: state, ...state, onChange };
};
