import { Container } from "./styles";
import IncomeImage from "../../assets/income.svg";
import OutcomeImage from "../../assets/outcome.svg";
import TotalImage from "../../assets/total.svg";
import { useContext, useMemo } from "react";
import { TransactionsContext, useTransaction } from "../../TransactionsContext";

export const Summary = () => {
  const { transactions } = useTransaction();

  console.log(transactions);

  const summary = transactions.reduce(
    (acc, currValue) => {
      if (currValue.type === "deposit") {
        acc.deposit += currValue.amount;
        acc.total += currValue.amount;
      }
      if (currValue.type === "withdraw") {
        acc.withdraw -= currValue.amount;
        acc.total -= currValue.amount;
      }

      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <h1>Entradas</h1>
          <img src={IncomeImage} alt="" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <h1>Saidas</h1>
          <img src={OutcomeImage} alt="" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="HighlightBackground">
        <header>
          <h1>Entradas</h1>
          <img src={TotalImage} alt="" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
};
