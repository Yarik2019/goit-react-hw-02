import s from "./Feedback.module.css"

const Feedback = (props) => {
    const { good, neutral, bad, total, positivePercentange } = props;
    return (
        <>
            <ul className={s.list}>
                <li className={s.item}>Good: {good}</li>
                <li className={s.item}>Neutral: {neutral}</li>
                <li className={s.item}>Bad: {bad}</li>
                <li className={s.item}>Totall: {total}</li>
                <li className={`${s.item} ${s.itemColor}`}>Positive: {positivePercentange}%</li>
            </ul>
        </>
    )
}

export default Feedback;