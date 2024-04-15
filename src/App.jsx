import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Blank from "./pages/Blank";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes> 
        <Route path="/404" element={<NotFound />} />
        <Route path="/blank" element={ <Blank />} />
        <Route path="/" element={ <Home />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
