function TiposBasicos() {
  let nombre: string = "Lucas";
  const edad: number = 38;
  const estaActivo: boolean = true;
  const poderes: string[] = ["Velocidad", "Volar", "Respira en el agua"];

  return (
    <div className="mt-2 mx-2">
      <h3>TIPOS BASICOS</h3>
      <div className="mb-1 mx-3">
        <label htmlFor="nombre">NOMBRE: </label>
        <input type="text" value={nombre} readOnly />
      </div>
      <div className="mb-1 mx-3">
        <label htmlFor="edad">EDAD: </label>
        <input type="number" value={edad} readOnly/>
      </div>
      <div className="mb-1 mx-3">
        <label htmlFor="estaActivo">
          <input type="checkbox" checked={estaActivo} readOnly />
          Activo
        </label>
      </div>
      <div className="mt-2 mx-2">
        <h4>Poderes</h4>
        <ol>
          {poderes.map((poder, index) => (
            <li key={index}>{poder}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default TiposBasicos;
