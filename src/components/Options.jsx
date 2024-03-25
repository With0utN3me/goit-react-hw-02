
const Options = ({updateF, totalF, updateTotalF, resetF}) => {
return (
    <div>
        <button onClick={() =>{updateF("good") 
        updateTotalF()}}>Good</button>
        <button onClick={() => {updateF("neutral")
        updateTotalF()}}>Neutral</button>
        <button onClick={() => {updateF("bad")
        updateTotalF()}}>Bad</button>
        {totalF > 0 && <button onClick={() => {resetF()
        updateTotalF()}}>Reset</button>}
    </div>
)
}
export default Options;