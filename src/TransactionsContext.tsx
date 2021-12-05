import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "./components/services/clientApi";

interface transactionItem {
  title: string;
  type: string;
  amount: number;
  category: string;
  id: number;
  created_at: Date;
}

interface TransactionContextProviderProps {
  children: ReactNode;
}

type transactionInput = Omit<transactionItem, "id" | "created_at">;

interface transactionsContextData {
  transactions: transactionItem[];
  createTransactions(data: transactionInput): void;
}

export const TransactionsContext = createContext<transactionsContextData>(
  {} as transactionsContextData
);

export const TransactionContextProvider = ({
  children,
}: TransactionContextProviderProps) => {
  const [transactions, setTransactions] = useState<transactionItem[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  const createTransactions = async (data: transactionInput) => {
    const response = await api.post("transactions", {
      ...data,
      created_at: new Date(),
    });

    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionsContext);
  return context;
};
