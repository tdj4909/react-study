import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("컴포넌트가 렌더링되었습니다!");

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머가 정리되었습니다.");
    };
  }, []);

  return (
    <div>
      <p>경과 시간: {time}초</p>
    </div>
  );
}

export default Timer;
