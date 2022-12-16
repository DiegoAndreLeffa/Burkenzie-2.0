import logo from "../../components/imgs/LogoHamburKenzie.svg";

import { FaShoppingCart } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import { CartContext, iListProducts } from "../../context/CartContext";
import { CartProducts } from "../../components/cartProducts";
import { ModalCart } from "../../components/modalCart";
import { StyledDeshBoard } from "./styles";

export function DashBoard() {
  const navigate = useNavigate();

  const { products, carregando } = useContext(UserContext);

  const { listProducts, openModalCart, modalCart, cart } =
    useContext(CartContext);
  const [filter, setFilter] = useState([] as iListProducts[]);
  const [busca, setBusca] = useState("");

  if (carregando) {
    return null;
  }

  function logout() {
    window.localStorage.clear();
    navigate("/");
  }

  function filtro() {
    const filtro = products.filter((produto) => {
      const { name, category } = produto;

      if (name.toLowerCase().includes(busca.toLowerCase())) {
        return produto;
      } else if (category.toLowerCase().includes(busca.toLowerCase())) {
        return produto;
      }
    });

    setFilter(filtro);
    return filtro;
  }

  return products.length > 0 ? (
    <StyledDeshBoard>
      <header>
        <div>
          <img src={logo} alt="HamburKenzie" />
        </div>
        <div className="Box">
          <div className="pesquisa">
            <input
              type="text"
              placeholder="Digitar Pesquisa"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <div className="lupasDiv">
              <FaSearch className="lupa" onClick={() => filtro()} />
            </div>
          </div>

          <div className="Cart">
            <FaShoppingCart
              className="cartOpen"
              onClick={() => openModalCart()}
            />
            <div className="contador">
              <p>{cart.length}</p>
            </div>
          </div>

          <div className="sair">
            <BiExit className="buttonSair" onClick={logout} />
          </div>
        </div>
      </header>

      {modalCart && <ModalCart key={"modalCart"} />}

      {filter.length === 0 ? (
        <div className="divLista">
          <ul className="lista">
            {listProducts.map((item) => {
              return <CartProducts key={item.id} item={item} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="divLista">
          <ul className="lista">
            {filter.map((item) => {
              return <CartProducts key={item.id} item={item} />;
            })}
          </ul>
        </div>
      )}
    </StyledDeshBoard>
  ) : (
    <Navigate to="/" />
  );
}
