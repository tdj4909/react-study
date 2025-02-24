import React, {useContext} from "react";
import { UserContext } from "./UserContext";

function Profile() {
    const username = useContext(UserContext);
    return <p>사용자 이름: {username}</p>;
}

export default Profile;