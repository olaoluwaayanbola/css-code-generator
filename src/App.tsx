import AppStyle from './App.module.css';
import { Routes, Route } from "react-router-dom"
import { Transform } from "./Pages/Transform/Transform"
import { Gradient } from './Pages/Gradient/Gradient';
import { BoxShadow } from "./Pages/BoxShadow/BoxShadow"
import { LandingPage } from './Pages/LandingPage/LandingPage';
import { RGBAoptions } from './Pages/RGBAOptions/RGBAoptions';
function App() {
  return (
    <div className={AppStyle.App} >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/RGBA" element={<RGBAoptions />} />
        <Route path="/Gradient" element={<Gradient />} />
        <Route path="/BoxShadow" element={<BoxShadow />} />
        <Route path="/Transform" element={<Transform />} />
      </Routes>
    </div>
  );
}

export default App;
