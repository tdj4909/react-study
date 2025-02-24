import Hello from "./Hello";

function App(){
  return (
    <div>
      <Hello /> {/* Hello 컴포넌트 사용 */}
      <Hello name="철수" />
      <Hello name="영희" />
      <Hello name="민수" />
    </div>
  );
}

export default App;