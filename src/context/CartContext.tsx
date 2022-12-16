import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { api } from "../service/api";

export interface iListProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iCart {
  price: number;
  id: number;
  img: string;
  name: string;
}

interface iDefaultErrorResponse {
  error: string;
}

interface iCartProviderProps {
  children: React.ReactNode;
}

interface iCartProviderValue {
  listProducts: iListProducts[];
  cart: iCart[];
  addCart: (item: iListProducts) => void;
  remover: (item: string, id: number) => void;
  modalCart: boolean;
  openModalCart: () => void;
  closeModalCart: () => void;
  removeAll: () => void;
}

export const CartContext = createContext({} as iCartProviderValue);

export function CartProvider({ children }: iCartProviderProps) {
  const [listProducts, setListProducts] = useState([] as iListProducts[]);

  const [cart, setCart] = useState([] as iCart[]);
  const [currentItem, setCurrentItem] = useState([] as number[]);

  const [modalCart, setModalCart] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    async function getProducts() {
      try {
        const request = await api.get("/products", {
          headers: { authorization: `Bearer ${token}` },
        });

        setListProducts(request.data);
      } catch (error) {
        const currentError = error as AxiosError<iDefaultErrorResponse>;
        console.log(currentError);
      }
    }
    getProducts();
  }, []);

  function addCart(item: iListProducts) {
    setCurrentItem([...currentItem, item.id]);

    const id = item.id;

    if (currentItem.includes(id) === false) {
      setCart([...cart, item]);
    } else {
      toast.error("Item ja foi adicionado");
    }
  }

  function remover(item: string, id: number) {
    const remove = cart.filter((produto) => {
      return produto.name !== item;
    });
    setCart(remove);
    const removeItem = currentItem.filter((prodId) => {
      return prodId !== id;
    });
    setCurrentItem(removeItem);
  }

  function openModalCart() {
    setModalCart(true);
  }

  function closeModalCart() {
    setModalCart(false);
  }

  function removeAll() {
    setCart([]);
    setCurrentItem([]);
  }

  return (
    <CartContext.Provider
      value={{
        listProducts,
        cart,
        addCart,
        remover,
        modalCart,
        openModalCart,
        closeModalCart,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
