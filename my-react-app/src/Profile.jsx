import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h2>프로필</h2>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>

            <button onClick={() => setUser({...user, age: user.age + 1})}>
                나이 증가
            </button>
        </div>
    );
}

export default Profile;