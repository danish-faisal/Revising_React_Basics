import "./App.css";
import CounterExample from "./components/CounterExample";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div>
      <HelloWorld name={"Danish"} />
      <CounterExample />
    </div>
  );
}

export default App;
