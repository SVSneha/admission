
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Register from "./components/Register";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/studentRegistration" element={<Register />} />
          <Route path="/display" element={<Display />} />
      
        </Routes>
      </BrowserRouter>   
       </div>  ); }
export default App;
