import "./App.css";
import Landing from "./pages/landingPage/Landing";
import CaDetails from "./pages/caDetails/caDetails";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/CaDetails/:id" element={<CaDetails/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
