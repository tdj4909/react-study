import React, {useState} from "react";

const ChildComponent = ({name}) => {
  console.log("ChildComponent 렌더링");
  return <p>안녕, {name}!</p>;
};

const MemoizedChild = React.memo(ChildComponent);

function App(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>카운트: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1 증가</button>

      <MemoizedChild name="React" />
    </div>
  );
}

export default App;