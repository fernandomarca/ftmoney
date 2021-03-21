import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transactions {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<Transactions, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionsContextData {
  transactions: Array<Transactions>;
  createTransaction: (transaction: TransactionInput) => void;
}

//1º passo criar o Contexto com createContext()
//2º passo criar e exportar a função Provider (TransactionsProvider()). depois importar por volta do APP
//Ela retorna de fato o Context.Provider para a aplicação com sus "Values"
export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
