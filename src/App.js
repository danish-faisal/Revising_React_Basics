import "./App.css";
import CounterExample from "./components/CounterExample";
import Header from "./components/Header";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name={"Danish"} />
      <CounterExample />
    </div>
  );
}

export default App;
