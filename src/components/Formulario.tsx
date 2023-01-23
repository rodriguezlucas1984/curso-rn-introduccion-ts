import { useForms } from "../hooks/useForms";

export const Formulario = () => {
  const { email, onChange, password, formulario } = useForms({
    email: "test@test.com",
    password: "123456",
  });

  return (
    <div className="mt-3 mx-2">
      <h3>FORMULARIO</h3>
      <div className="mt-2 mx-3">
        <label htmlFor="email" className="text-center" style={{ width: 100 }}>
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => {
            onChange(target.value, "email");
          }}
        />
      </div>
      <div className="mt-2 mx-3">
        <label
          htmlFor="password"
          className="text-center"
          style={{ width: 100 }}
        >
          password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={({ target }) => {
            onChange(target.value, "password");
          }}
        />
      </div>
      <code className="d-block mt-2 mx-3">
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </div>
  );
};
