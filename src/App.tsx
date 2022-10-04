import AppStyle from './App.module.css';
import { Routes, Route } from "react-router-dom"
import { Transform } from "./Pages/Transform/Transform"
import { BoxShadow } from "./Pages/BoxShadow/BoxShadow"
import { LandingPage } from './Pages/LandingPage/LandingPage';
function App() {
  return (
    <div className={AppStyle.App}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/BoxShadow" element={<BoxShadow />} />
        <Route path="/Transform" element={<Transform  />} />
      </Routes>
    </div>
  );
}

export default App;
