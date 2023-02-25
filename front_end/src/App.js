import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";



function App() {
  return(
    <div>
  <Routes>
     <Route path="/home" element={ <Home/> } />
     <Route path="/" element={ <Login/> } />
     <Route path="/register" element={ <Register/> } />

   </Routes>
</div>
)

}


export default App;