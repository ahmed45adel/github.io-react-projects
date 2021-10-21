import ShowCounter from "./ShowCounter";
import CounterButton from './CounterButton';
import { Decrease, Increase } from '../../ReduxConfig/ReduxCounter'
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

    //access store
    const countState = useSelector(state => state.count)
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(Increase(1))
    }
    const decrement = () => {
        dispatch(Decrease(1))
    }

    return (
        <div>
            <ShowCounter Counter={countState} />
            <CounterButton CounterAction={increment} actionType="Increase" />
            <CounterButton CounterAction={decrement} actionType="Decrease" />
        </div>
    )
}
export default Counter;