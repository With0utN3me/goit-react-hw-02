
const Options = ({updateF, totalF, resetF}) => {
return (
    <div>
        <button onClick={() => updateF("good")}>Good</button>
        <button onClick={() => updateF("neutral")}>Neutral</button>
        <button onClick={() => updateF("bad")}>Bad</button>
        {totalF > 0 && <button onClick={resetF}>Reset</button>}
    </div>
)
}
export default Options;