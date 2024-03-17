import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import ClientProfile from "./pages/ClientProfile";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/client-profile" element={<ClientProfile />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
