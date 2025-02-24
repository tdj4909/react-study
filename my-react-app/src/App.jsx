import Hello from "./Hello";
import Counter from "./Counter";
import UserName from "./UserName";

function App(){
  return (
    <div>
      <Hello /> {/* Hello 컴포넌트 사용 */}
      <Hello name="철수" />
      <Hello name="영희" />
      <Hello name="민수" />
      <Counter />
      <UserName />
    </div>
  );
}

export default App;