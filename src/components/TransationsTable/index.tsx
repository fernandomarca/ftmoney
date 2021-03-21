import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { formatDates } from "../../utils/formatDates";
import { formatValues } from "../../utils/formatValues";
import { Container } from "./styles";

interface Transactions {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

export function TransationsTable() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      {!transactions ? (
        <div>
          <h1>carregando...</h1>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {formatValues(transaction.amount, transaction.type)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>{formatDates(transaction.createdAt)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Container>
  );
}
