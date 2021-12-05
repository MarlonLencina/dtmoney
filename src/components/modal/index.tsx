import { FormEvent, useContext } from "react";
import { useState } from "react";
import Modal from "react-modal";
import { Container, TrnsactionTypeContainer, Button } from "./styles";
import closeImg from "../../assets/close.svg";
import IncomeImage from "../../assets/income.svg";
import OutcomeImage from "../../assets/outcome.svg";
import { TransactionsContext } from "../../TransactionsContext";

Modal.setAppElement("#root");

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: newTransactionModalProps) => {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const { createTransactions } = useContext(TransactionsContext);
  const handleCreateNewTransaction = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const data = {
      title,
      amount,
      type,
      category,
    };

    await createTransactions(data);
    onRequestClose();
    setAmount(0);
    setTitle("");
    setType("");
    setCategory("");
  };

  return (
    <Modal
      className="Modal"
      overlayClassName="Overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="reactModalClose"
      >
        <img src={closeImg} alt="" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar novas ações</h2>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Titulo"
        />
        <input
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          type="number"
          placeholder="Valor"
        />
        <input
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          type="text"
          placeholder="Categoria"
        />
        <TrnsactionTypeContainer>
          <Button
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => {
              setType("deposit");
            }}
            type="button"
          >
            <img src={IncomeImage} alt="" />
            <span>Entrada</span>
          </Button>
          <Button
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => {
              setType("withdraw");
            }}
            type="button"
          >
            <img src={OutcomeImage} alt="" />
            <span>Saída</span>
          </Button>
        </TrnsactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
