import Home from "./pages/Home2";
import Info from "./pages/Info";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:project" element={<Info/>} />
      </Routes>
    </div>
  );
}

export default App;
