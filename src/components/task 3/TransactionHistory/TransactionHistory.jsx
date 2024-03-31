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
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={style.rowContainer} key={id}>
              <td className={style.dataContainer}>{type}</td>
              <td className={style.dataContainer}>{amount}</td>
              <td className={style.dataContainer}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
