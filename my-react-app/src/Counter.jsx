import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{`카운트: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>+1 증가</button>
        </div>
    );
}

export default Counter;