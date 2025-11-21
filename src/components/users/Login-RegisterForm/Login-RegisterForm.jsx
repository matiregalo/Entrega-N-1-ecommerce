const Login_RegisterForm = ({ dataForm, handleChangeInput }) => {
  return (
    <div>
      <div className="input-box">
        <label htmlFor="email">Email</label>
        <input
          className="input"
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
        />
      </div>
      <div className="input-box">
        <label htmlFor="password">Contraseña</label>
        <input
          className="input"
          placeholder="Contraseña"
          type="password"
          id="password"
          name="password"
          value={dataForm.password}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
};

export default Login_RegisterForm;
