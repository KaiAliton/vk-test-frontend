import { useContext } from "react";
import AppContext from "../utils/AppContext.tsx";

export default function Login() {
  const { loginUser } = useContext(AppContext);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-base-100">
      <div className="w-fit h-fit flex items-center flex-col bg-primary rounded-2xl justify-center p-5">
        <div className="w-full text-center mb-5">
          <span className="text-2xl font-bold">SociaLike</span>
        </div>
        <form
          action="flex flex-row items-center justify-center"
          onSubmit={loginUser}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Почта</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="username"
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
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn btn-accent w-full max-w-xs my-3">Войти</button>
        </form>
        <a href={'/register'}>Нет аккаунта?</a>
      </div>
    </div>
  );
}
