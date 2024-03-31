import style from "./TransactionItem.module.css";

const TransactionItem = ({ info }) => {
  return (
    <>
      {info.map(({ id, type, amount, currency }) => {
        return (
          <tr className={style.rowContainer} key={id}>
            <td className={style.dataContainer}>{type}</td>
            <td className={style.dataContainer}>{amount}</td>
            <td className={style.dataContainer}>{currency}</td>
          </tr>
        );
      })}
    </>
  );
};

export default TransactionItem;
