import Profile from "./Profile";
import Counter from "./Counter";
import ButtonClick from "./ButtonClick";

function App(){
  return (
    <div>
      <Profile name="홍길동" age={25} />

      <Counter />

      <ButtonClick />
    </div>
  );
}

export default App;