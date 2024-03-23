import css from "./TransactionHistory.module.css"
const TransactionHistory = ({items}) => {
    return (
        <table className={css["table-wrapper"]}>
            <thead>
                <tr className={css["tr-header"]}>
                    <th className={css["tr-data-type"]}>Type</th>
                    <th className={css["tr-data-type"]}>Amount</th>
                    <th className={css["tr-data-type"]}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => {
                    return(
                        <tr key={item.id} className={css["tr-info-row"]}>
                            <td className={css["tr-info-value"]}><div className={css["left-text"]}>{item.type}</div></td>
                            <td className={css["tr-info-value"]}>{item.amount}</td>
                            <td className={css["tr-info-value"]}>{item.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default TransactionHistory;