import { useState } from "react";

function UserName() {
  const [name, setName] = useState("철수");

  return (
    <div>
      <h1>안녕하세요, {name}!</h1>
      <button onClick={() => setName("영희")}>이름 변경</button>
    </div>
  );
}

export default UserName;
