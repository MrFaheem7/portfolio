import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import ParticlesComponent from "./Components/Particles";
import "./App.css";
import "./style.css";
import "./index.css";
function App() {
  return (
    <>
      <Router>
        <ParticlesComponent id="tsparticles" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
