
const CounterButton = ({ CounterAction, actionType }) => {
    return (
        <div>
            <button onClick={CounterAction} >{actionType}</button>
        </div>
    )
}
export default CounterButton