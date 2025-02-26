import Profile from "./Profile";
import Counter from "./Counter";
import ButtonClick from "./ButtonClick";
import PostList from "./PostList";

function App(){
  return (
    <div>
      <Profile name="홍길동" age={25} />

      <Counter />

      <ButtonClick />

      <PostList />
    </div>
  );
}

export default App;