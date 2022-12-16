import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Cards } from "../cards";
import { CartTotal } from "../cartTotal";
import { CartVazio } from "./cartVasio";
import { StyledModalCart } from "./styles";

export function ModalCart() {
  const { cart, closeModalCart } = useContext(CartContext);

  return (
    <StyledModalCart>
      <div className="modalBody">
        <div className="modalBodyTitle">
          <h2>Carrinho de compras</h2>
          <button onClick={() => closeModalCart()}>X</button>
        </div>
        <div className="divList">
          <ul className="list">
            {cart.length === 0 ? (
              <CartVazio />
            ) : (
              <>
                {cart.map((item) => {
                  return <Cards item={item} />;
                })}
                <CartTotal key={"cartTotal"} />
              </>
            )}
          </ul>
        </div>
      </div>
    </StyledModalCart>
  );
}
