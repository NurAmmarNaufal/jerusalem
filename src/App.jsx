import Home from "./components/Home";
import DomOfRock from "./components/DomOfRock";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-laila">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domeofrock" element={<DomOfRock />} />
      </Routes>
    </div>
  );
}

export default App;
