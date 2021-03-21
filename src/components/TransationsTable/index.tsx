import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { formatDates } from "../../utils/formatDates";
import { formatValues } from "../../utils/formatValues";
import { Container } from "./styles";

export function TransationsTable() {
  const { transactions } = useContext(TransactionsContext);

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
