import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 0) {
            console.log(`카운트가 ${count}로 변경되었습니다!`);
        }
    }, [count]);

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