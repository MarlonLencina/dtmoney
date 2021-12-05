import { GlobalStyle } from "./styles/globalStyle";
import { HeaderComponent } from "./components/header";
import { Dashboard } from "./components/dashboard";
import { createServer, Model } from "miragejs";
import { useState } from "react";
import { NewTransactionModal } from "./components/modal/index";
import { TransactionContextProvider } from "./TransactionsContext";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 11,
          title: "Freelancer de website",
          type: "deposit",
          amount: 6000,
          created_at: new Date(2021, 2, 12, 20),
        },
        {
          id: 12,
          title: "Aluguel da casa",
          type: "withdraw",
          amount: 1100,
          created_at: new Date(2021, 3, 12, 14),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

export function App() {
  const [isNewTransictionModalOpen, setIsNewTransictionModalOpen] =
    useState(false);

  const handleNewTransactionModalOpen = () => {
    setIsNewTransictionModalOpen(true);
  };

  const handleNewTransactionModalClose = () => {
    setIsNewTransictionModalOpen(false);
  };

  return (
    <TransactionContextProvider>
      <HeaderComponent
        onOpenNewTransactionModal={handleNewTransactionModalOpen}
      />
      <NewTransactionModal
        isOpen={isNewTransictionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionContextProvider>
  );
}
