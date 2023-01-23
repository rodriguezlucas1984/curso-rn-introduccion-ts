import { useUsuarios } from "../hooks/useUsuarios";

import { Usuario } from "../interfaces/regRes.interface";
import Mensaje from "./Mensaje";

export const Usuarios = () => {
  const {
    error,
    paginaAnterior,
    paginaActual,
    paginaSiguiente,
    paginas,
    usuarios,
  } = useUsuarios();

  const renderItem = ({
    avatar,
    email,
    first_name,
    id,
    last_name,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            style={{ width: 45 }}
            className="rounded-circle"
            src={avatar}
            alt={first_name}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };
  return (
    <div className="mt-4 mx-2">
      <h3>USUARIOS:</h3>
      {error && (
        <Mensaje clases="alert alert-danger" texto={error.toString()} />
      )}

      {!error && (
        <>
          <table className="mx-3 table">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
          </table>
          {paginaActual > 1 && (
            <button className="btn btn-primary mx-2" onClick={paginaAnterior}>
              Anterior
            </button>
          )}

          {(!paginas || paginas > paginaActual) && (
            <button className="btn btn-primary mx-2" onClick={paginaSiguiente}>
              Siguente
            </button>
          )}
        </>
      )}
    </div>
  );
};
