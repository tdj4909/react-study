import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}) {
    const [user, setUser] = useState({ name: "홍길동", age: 25});

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;