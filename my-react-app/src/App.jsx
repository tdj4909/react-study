import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, fetchData } from "./CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => state.counter.data);
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();
  

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1 증가</button>
      <button onClick={() => dispatch(decrement())}>-1 감소</button>

      <h2>비동기 API 데이터</h2>
      <button onClick={() => dispatch(fetchData())}>데이터 가져오기</button>
      {status === "loading" && <p>로딩 중...</p>}
      {status === "succeeded" && <p>데이터: {JSON.stringify(data)}</p>}
      {status === "failed" && <p>데이터 불러오기 실패</p>}
    </div>
  );
}

export default App;