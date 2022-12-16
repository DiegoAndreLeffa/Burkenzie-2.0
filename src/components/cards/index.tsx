import { useContext } from "react";
import { CartContext, iCart } from "../../context/CartContext";
import { CardsCartProducts } from "./styles";

interface iCartProd {
  item: iCart;
}

export function Cards({ item }: iCartProd) {
  const { remover } = useContext(CartContext);

  return (
    <CardsCartProducts key={item.id}>
      <div className="divImg">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="divnome">
        <h3>{item.name}</h3>
      </div>
      <button onClick={() => remover(item.name, item.id)}>Remover</button>
    </CardsCartProducts>
  );
}
