import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Store";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>카운드: {count}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
        </div>
    );
}

export default Counter;