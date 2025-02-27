import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child Rendered");
  return <p>{name}</p>;
});

function Parent() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <p>Counter: {counter}</p>
      <Child name="John" />
    </div>
  );
}

export default Parent;
