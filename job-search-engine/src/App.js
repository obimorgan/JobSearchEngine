import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Home from "./component/Home"


function App() {
  return(
  <BrowserRouter>
  <Home/> 
  </BrowserRouter>
  );
}

export default App;
