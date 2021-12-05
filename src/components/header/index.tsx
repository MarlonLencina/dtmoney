import logo from "../../assets/logo.svg";

import { Header, Container } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal(): void;
}

export const HeaderComponent = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Header>
      <Container>
        <img src={logo} alt="logo dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Container>
    </Header>
  );
};
