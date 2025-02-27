import { UserProvider } from "./UserContext";
import Profile from "./Profile";
import Counter from "./Counter";
import ButtonClick from "./ButtonClick";
import PostList from "./PostList";

function App() {
  return (
    <UserProvider>
      <div>
        <h1>리액트 데이터 관리 실습</h1>

        <Profile/>
        <Counter />
        <ButtonClick />
        <PostList />
        
      </div>
    </UserProvider>
  );
}

export default App;