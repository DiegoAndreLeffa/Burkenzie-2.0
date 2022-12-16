import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { api } from "../service/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { iListProducts } from "./CartContext";

interface iLogin {
  email: string;
  password: string;
}
interface iResponse {
  accessToken: string;
  user: iUser;
}

interface iUser {
  id: string;
  name: string;
  email: string;
}

interface iRegister {
  name: string;
  email: string;
  password: string;
}

interface iDefaultErrorResponse {
  error: string;
}

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUserProviderValue {
  userLogin: (formData: iLogin) => void;
  userRegister: (formData: iRegister) => void;
  products: iListProducts[];
  carregando: boolean;
  loading: boolean;
}

export const UserContext = createContext({} as iUserProviderValue);

export function UserProvider({ children }: iUserProviderProps) {
  const navigate = useNavigate();

  const [products, setProducts] = useState([] as iListProducts[]);

  const [loading, setLoading] = useState(false);

  const [carregando, setCarregando] = useState(true);

  async function userLogin(formData: iLogin) {
    try {
      setLoading(true);
      const { data } = await api.post<iResponse>("/login", formData);

      const { accessToken } = data;

      localStorage.setItem("@TOKEN", accessToken);

      navigate("/dashboard");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      toast.error(currentError.response?.data.error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setCarregando(false);
        return;
      }

      try {
        const { data } = await api.get<iListProducts[]>("/products", {
          headers: { authorization: `Bearer ${token}` },
        });

        setProducts(data);
      } catch (error) {
        console.error(error);
        localStorage.clear();
      } finally {
        setCarregando(false);
      }
    }

    loadUser();
  }, []);

  async function userRegister(formData: iRegister) {
    try {
      setLoading(true);
      const response = await api.post<iResponse>("/users", formData);
      toast.success("Conta cadastrada com sucesso");

      navigate("/");
      return response;
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      toast.error(currentError.response?.data.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userRegister, products, carregando, loading }}
    >
      {children}
    </UserContext.Provider>
  );
}
