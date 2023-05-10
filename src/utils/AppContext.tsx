import React, { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { API_URL } from "./useAxios.ts";

const AuthContext: React.Context<any> = createContext({});

export default AuthContext;


export const AuthProvider: React.FC<{children: any}> = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens")!)
      : null
  );
  const [user, setUser] = useState(
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens")!)
      : null
  );
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens")!).user
      : null
  );
  const [loading, setLoading] = useState<boolean>(false);
  console.log("i am working!")

  const registerUser = async (e: any) => {
    console.log(e);
    //e.preventDefault()
    if (e.target.password.value != e.target.password2.value) {
      return "your password do not match...";
    }
    const formData = new FormData();
    formData.append("username", e.target.username.value);
    formData.append("password", e.target.password.value);
    formData.append("password2", e.target.password2.value);
    formData.append("email", e.target.email.value);
    const response = await fetch(`${API_URL}/auth/register/`, {
      method: "POST",
      body: formData,
    });
    if (response.status === 201) {
      loginUserForm(e.target.email.value, e.target.password.value);
    } else if (response.status === 400) {
      return response.json();
    }
  };

  const loginUserForm = async (email: string, password: string) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const response = await fetch(`${API_URL}/auth/login/`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      window.location.replace("/");
    } else {
      // alert('Something went wrong!')
    }
  };

  const loginUser = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", e.target.username.value);
    formData.append("password", e.target.password.value);
    const response = await fetch(`${API_URL}/auth/login/`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      window.location.replace("/");
    } else {
      // alert('Something went wrong!')
    }
  };

  const logoutUser = () => {
    console.log("logout");
    setAuthTokens(null);
    setUser(null);
    setUserInfo(null);
    localStorage.removeItem("authTokens");
    window.location.replace("/login");
  };

  const contextData = {
    authTokens: authTokens,
    setAuthTokens: setAuthTokens,
    setUser: setUser,
    user: user,
    userInfo: userInfo,
    logoutUser: logoutUser,
    loginUser: loginUser,
    registerUser: registerUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
