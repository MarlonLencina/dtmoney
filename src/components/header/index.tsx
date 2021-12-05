import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import Modal from "react-modal";

import { Header, Container } from "./styles";
import ReactModal from "react-modal";

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
