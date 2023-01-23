import { useCounter } from "../hooks/useCounter";

const ContadorConHook = () => {
  const { valor, acumular } = useCounter();
  return (
    <div className="mt-2 mx-2">
      <h3>CONTADOR CON HOOK</h3>
      <div className="mx-3">
        <label htmlFor="valor">Valor: </label>
        <input type="number" name="valor" id="valor" value={valor} readOnly />
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            acumular();
          }}
        >
          +1
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            acumular(-1);
          }}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default ContadorConHook;
