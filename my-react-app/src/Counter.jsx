import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, fetchCounter } from "./CounterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCounter());
    }, [dispatch]);

    return (
        <div>
            <h1>카운트: {count}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
        </div>
    );
}

export default Counter;