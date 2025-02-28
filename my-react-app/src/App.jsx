import PropTypes from "prop-types";
import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button 컴포넌트 렌더링");
  return <button onClick={onClick}>+1 증가</button>;
});
Button.displayName = "Button";

Button.propTypes = {
  onClick: PropTypes.func.isRequired, // onClick은 필수 함수형 prop
};

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>카운트: {count}</h1>
      <Button onClick={increment} />
    </div>
  );
}

export default App;
