import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>카운터</h2>
            <p>현재 카운트: {count}</p>
            <button onClick={() => dispatch(increment())}>+1 증가</button>
            <button onClick={() => dispatch(decrement())}>-1 증가</button>
            <button onClick={() => dispatch(reset())}>초기화</button>
        </div>
    );
}

export default Counter;