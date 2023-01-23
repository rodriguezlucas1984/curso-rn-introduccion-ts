import { useState } from "react";

const Contador = (props: any) => {
  const { inicio = 0, incremento = 1 } = props;
  const [valor, setValor] = useState(inicio);

  const acumular = (sumar: boolean = true) => {
    setValor(sumar ? valor + incremento : valor - incremento);
  };

  return (
    <div className="mt-3 mx-2">
      <h3>CONTADOR</h3>
      <div className="mx-3">
        <label htmlFor="valor">Valor: </label>
        <input type="number" name="valor" id="valor" value={valor} readOnly />
        <button
          className="btn btn-primary  mx-1"
          onClick={() => {
            acumular();
          }}
        >
          + {incremento}
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            acumular(false);
          }}
        >
          - {incremento}
        </button>
      </div>
    </div>
  );
};

export default Contador;
