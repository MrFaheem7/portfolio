import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import ParticlesComponent from "./Components/Particles";
import "./App.css";
import "./style.css";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./Components/Loader";
function App() {
  const Home = lazy(() => import("./pages/Home"));
  return (
    <>
      <Router>
        <ParticlesComponent id="tsparticles" />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
