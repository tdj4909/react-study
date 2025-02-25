import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./CounterSlice";

function App(){
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Redux Persist Counter</h1>
      <p>현재 카운트: {count}</p>
      <button onClick={() => dispatch(increment())}>+1 증가</button>
    </div>
  );
}

export default App;