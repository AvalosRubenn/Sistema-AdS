function Login() {
  return (
    <div className="w-[25%] flex flex-col items-center justify-center gap-y-6 ">
      <div className="w-35 h-21 transform transition duration-300 hover:-translate-y-5">
        <img src="src/assets/Logo.png" />
      </div>
      <div className="flex flex-col h-full rounded-xl w-full shadow-xl bg-surface p-10 gap-y-6">
        <div>
          <h2 className="text-3xl font-semibold">Bienvenido</h2>
          <p>Inicia sesión para continuar</p>
        </div>
        <div>
          <p>Email</p>
          <input
            type="text"
            placeholder="nombre.apellido@zies.com"
            className="rounded-md border-2 rounded-xl p-2 w-full border-gray-200"
          />
        </div>
        <div>
          <p>Contraseña</p>
          <input
            type="password"
            placeholder="•••••••"
            className="rounded-md border-2 rounded-xl p-2 w-full border-gray-200"
          />
        </div>
        <div className="w-full flex items-center justify-center text-primary">
          <p>¿Olvidaste tu contraseña?</p>
        </div>
        <div>
          <button className="bg-accent p-3 text-white rounded-md w-full hover:bg-accent-hard font-bold">
            Iniciar sesión
          </button>
        </div>
        <div className="flex items-center justify-center text-primary">
          <p>
            ¿Aún no tienes cuenta? <strong>Regístrate</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
