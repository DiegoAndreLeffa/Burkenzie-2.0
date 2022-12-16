import { useContext } from "react";
import { CartContext, iListProducts } from "../../context/CartContext";
import { StyledListProduct } from "./styles";

interface iCartProducts {
  item: iListProducts;
}

export function CartProducts({ item }: iCartProducts) {
  const { addCart } = useContext(CartContext);

  return (
    <StyledListProduct key={item.id}>
      <div className="divImg">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="divBody">
        <h2>{item.name}</h2>
        <small>{item.category}</small>
        <p>
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={() => addCart(item)}>Adicionar</button>
      </div>
    </StyledListProduct>
  );
}
