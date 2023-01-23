import { useState } from "react";

function Funciones() {
  const [numeros, setNumeros] = useState({ a: 0, b: 0, suma: 0 });

  const sumar = (a: number, b: number) => {
    return a + b;
  };

  const obtenerSuma = (event: any) => {
    const { name, value } = event.target;
    let valor: number = Number(value);
    let suma: number;
    if (name === "a") {
      suma = sumar(valor, Number(numeros.b));
    } else {
      suma = sumar(Number(numeros.a), valor);
    }
    setNumeros({ ...numeros, [name]: value, suma });
  };

  return (
    <div className="mt-2 mx-2">
      <h3>FUNCIONES</h3>
      <div className="mx-3 row-cols-4">
        <input className="col-4"
          type="number"
          name="a"
          id="a"
          value={numeros.a}
          onChange={obtenerSuma}
        />{" "}
        +
        <input className="col-sm-2"
          type="number"
          name="b"
          id="b"
          value={numeros.b}
          onChange={obtenerSuma}
        />{" "}
        =
        <input className="col-4"
          type="number"
          name="suma"
          id="suma"
          readOnly
          value={numeros.suma}
        />
      </div>
    </div>
  );
}

export default Funciones;
