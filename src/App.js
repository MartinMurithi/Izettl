import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import ScrollToAnchor from "./components/ScrollToAnchor";

function App() {
  return (
    <div className="App">
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
