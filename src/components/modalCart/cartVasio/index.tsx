import { StyledCartEmpty } from "./style";

export function CartVazio() {
  return (
    <StyledCartEmpty>
      <h3>Sua sacola está vazia</h3>
      <small>Adicione itens</small>
    </StyledCartEmpty>
  );
}
