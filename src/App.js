import "./App.css";
// import CounterExample from "./components/CounterExample";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name={"Danish"} />
      {/* <CounterExample /> */}
      <Footer />
    </div>
  );
}

export default App;
