import css from "./Feedback.module.css"
const Feedback = ({valueG, valueN, valueB, valueTF}) =>{
    return (
        <ul className={css["feedback-list"]}>
            <li className={css["feedback-list-item"]}>&#128151;Good: {valueG}</li>
            <li className={css["feedback-list-item"]}>&#10004;Neutral: {valueN}</li>
            <li className={css["feedback-list-item"]}>&#10060;Bad: {valueB}</li>
            <li className={css["feedback-list-item"]}>Total: {valueTF}</li>
            <li className={css["feedback-list-item"]}>&#128154;Positive: {Math.round((valueG / valueTF) * 100)}&#37;</li>
        </ul>
    )
}
export default Feedback;