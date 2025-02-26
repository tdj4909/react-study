import Profile from "./Profile";
import Counter from "./Counter";
import ButtonClick from "./ButtonClick";
import PostList from "./PostList";

function App(){
  return (
    <div>
      <h1>리액트 데이터 관리 실습</h1>
      
      <Profile name="홍길동" age={25} />

      <Counter />

      <ButtonClick />

      <PostList />
    </div>
  );
}

export default App;