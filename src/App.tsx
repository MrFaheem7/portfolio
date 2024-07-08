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
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        {load && <Loader load={load} />}
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
