import "./App.css";
import Landing from "./pages/landingPage/Landing.jsx";
import CaDetails from "./pages/caDetails/CaDetails.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/CaDetails/:name" element={<CaDetails/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
