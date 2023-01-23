interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

function ObjetosLiterales() {
  const persona: Persona = {
    nombreCompleto: "Juan Perez",
    edad: 40,
    direccion: {
      pais: "Argentina",
      casaNo: 142,
    },
  };
  return (
    <div className="mt-2 mx-2">
      <h3>OBJETOS LITERALES</h3>
      <code>
        <pre className="mx-3">{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </div>
  );
}

export default ObjetosLiterales;
