import { Container } from "./styles";
import { Summary } from "../summary";
import { TransactionsTable } from "../transactionsTable";

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
};
