import { useEffect, useReducer } from "react";

import Mensaje from "./Mensaje";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  nombre: "",
  username: "",
  token: null,
  validando: true,
};

type LoginPayload = {
  username: string;
  nombre: string;
};

type AuthAction =
  | {
      type: "logout";
    }
  | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        nombre: "",
        token: null,
        username: "",
        validando: false,
      };
    case "login":
      const { nombre, username } = action.payload;
      return {
        nombre,
        token: "ABC123",
        username,
        validando: false,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  let clases: string = "",
    texto: string = "";

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: { nombre: "Lucas", username: "Strider" },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };
  if (validando) {
    clases = "alert alert-info";
    texto = "Validando...";
  }

  if (!validando && token) {
    clases = "alert alert-sucess";
    texto = `Usuario ${nombre} autenticado`;
  }

  if (!validando && !token) {
    clases = "alert alert-danger";
    texto = `No autenticado`;
  }

  return (
    <div className="mt-2 mx-2">
      <h3>LOGIN</h3>
      <div className="mx-3">
        <Mensaje clases={clases} texto={texto} />
        {!token ? (
          <button className="btn btn-primary mx-2" onClick={login}>
            Login
          </button>
        ) : (
          <button className="btn btn-danger mx-2" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
