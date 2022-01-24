import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./component/Home"
import SingleCompany from './component/SingleCompany'


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:company" element={<SingleCompany />} />
        <Route path="*" element={<Home/>} />
      </Routes>
  
  </BrowserRouter>
  );
}

export default App;
