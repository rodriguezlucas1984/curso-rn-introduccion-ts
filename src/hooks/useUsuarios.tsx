import { useEffect, useState } from "react";

import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/regRes.interface";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [error, setError] = useState<any>(null);
  const [paginas, setPaginas] = useState<number | null>(null);
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    //Llamado al API
    const cargarUsuarios = async () => {
      try {
        const resp = await reqResApi.get<ReqResListado>("/users", {
          params: {
            page: paginaActual,
          },
        });

        if (!paginas) {
          setPaginas(resp.data.total_pages);
        }
        if (resp.data.data.length > 0) {
          setUsuarios(resp.data.data);
        }
      } catch (e) {
        setError(e);
      }
    };
    cargarUsuarios();
  }, [paginaActual, paginas]);

  const paginaSiguiente = () => {
    if (paginaActual === paginas) return;
    setPaginaActual(paginaActual + 1);
  };

  const paginaAnterior = () => {
    if (paginaActual === 1) return;
    setPaginaActual(paginaActual - 1);
  };

  return {
    error,
    paginaAnterior,
    paginaSiguiente,
    paginas,
    paginaActual,
    usuarios,
  };
};
