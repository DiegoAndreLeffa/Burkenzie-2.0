import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { StyledTotalCartProducts } from "./styles";

export function CartTotal() {
  const { cart, removeAll } = useContext(CartContext);

  const valores = cart.reduce((a, b) => {
    return a + b.price;
  }, 0);

  return (
    <StyledTotalCartProducts>
      <div key={"boxTotal"}>
        <h4>Total:</h4>
        <p>
          {valores.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button onClick={() => removeAll()}>Remover todos</button>
    </StyledTotalCartProducts>
  );
}
