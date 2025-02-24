import React, {useContext} from "react";
import { UserContext } from "./UserContext";

function Header(){
    const username = useContext(UserContext);
    return <h1>안녕하세요, {username}님!</h1>;
}

export default Header;