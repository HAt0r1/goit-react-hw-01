import TransactionItem from "../TransactionItem/TransactionItem";
import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.tableContainer}>
      <thead className={style.headContainer}>
        <tr className={style.rowContainer}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <TransactionItem info={items} />
      </tbody>
    </table>
  );
};

export default TransactionHistory;
