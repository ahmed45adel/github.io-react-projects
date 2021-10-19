import { useState } from "react";
import ShowCounter from "./ShowCounter";
import CounterButton from './CounterButton';

const Counter = () => {
    const [Counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(Counter + 1);

    }
    const decrease = () => {
        setCounter(Counter - 1);

    }
    return (
        <div>
            <ShowCounter Counter={Counter}>
            </ShowCounter>
            <CounterButton CounterAction={increase} actionType="Increase" />
            <CounterButton CounterAction={decrease} actionType="Decrease" />
        </div>
    )
}
export default Counter;