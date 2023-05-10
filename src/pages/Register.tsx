import { useContext, useState } from "react";
import AppContext from "../utils/AppContext.tsx";

function Register() {
  const { registerUser } = useContext(AppContext);
  const [error, setError] = useState<string | null>(null)
  function preRegisterUser(e: any) {
    e.preventDefault();
    if (checkIdentity(e)) {
        registerUser(e).catch((e:any) => console.log(e))
    }
  }
  function checkIdentity(e: any) {
    if (e.target.password.value != e.target.password2.value) {
      setError("Пароли не совпадают");
      return false;
    }
    return true;
  }
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-base-100">
      <div className="w-fit h-fit flex items-center flex-col bg-primary rounded-2xl justify-center p-5">
        <div className="w-full text-center mb-5">
          <span className="text-2xl font-bold">SociaLike</span>
        </div>
        <form
          action="flex flex-row items-center justify-center"
          onSubmit={preRegisterUser}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Почта</span>
            </label>
            <input
              type="email"
              placeholder=""
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Никнейм</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="username"
              minLength={4}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Пароль</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="password"
              minLength={8}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Повтор пароля</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="password2"
              minLength={8}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <span>{error}</span>
          <button className="btn btn-accent w-full max-w-xs my-3">Войти</button>
        </form>
        <a href={'/login'}>Уже зарегистрированы?</a>
      </div>
    </div>
   
  );
}

export default Register;
