import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CounterExample from "./components/CounterExample";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelloWorld from "./components/HelloWorld";
import Home from "./views/Home";
import About from "./views/About";

function App() {
  return (
    <div>
      <Router>
        <Header />
        {/* <CounterExample /> */}
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
