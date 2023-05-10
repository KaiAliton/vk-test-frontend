import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AppContext from "./AppContext.tsx";

export const API_URL = "http://tailhost.ru:8000";

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AppContext);

  const axiosInstance = axios.create({
    baseURL:API_URL,
    headers: { Authorization: `Bearer ${authTokens?.access}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    console.log("first refresh");
    const user: any = jwt_decode(authTokens.access);
    const isExpired: boolean = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await axios.post(
      `${API_URL}/auth/refresh/`,
      {
        refresh: authTokens.refresh,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    localStorage.setItem("authTokens", JSON.stringify(response.data));

    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.access));

    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;
