import React, {useState} from "react";
import { UserContext } from "./UserContext";
import Header from "./Header";
import Profile from "./Profile";

function App(){
  const [username, setUsername] = useState("홍길동");

  return (

    <UserContext.Provider value={username}>
      <Header />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;