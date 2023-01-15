import Home from "./components/Home";
import DomOfRock from "./components/DomOfRock";
import { Routes, Route } from "react-router-dom";
import WailingWall from "./components/WailingWall";
import Church from "./components/Church";

function App() {
  return (
    <div className="font-laila">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domeofrock" element={<DomOfRock />} />
        <Route path="/wailingwall" element={<WailingWall />} />
        <Route path="/church" element={<Church />} />
      </Routes>
    </div>
  );
}

export default App;
