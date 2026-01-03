import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Homepage";
import Oilyskin from "./Components/Oilyskin";
import Dryskin from "./Components/Dryskin";
import Normalskin from "./Components/Normalskin";
import Combinationskin from "./Components/Combinationskin";
import Cart from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/oily" element={<Oilyskin />} />
        <Route path="/dry" element={<Dryskin />} />
        <Route path="/normal" element={<Normalskin />} />
        <Route path="/combination" element={<Combinationskin />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

