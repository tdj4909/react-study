import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>현재 카운트: {count}</p>
            <button onClick={handleClick}>+1 증가</button>
        </div>
    );
}

export default Counter;