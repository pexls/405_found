import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Register from "./pages/register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return(
  <div>
    <BrowserRouter>
  <Routes>
    <Route path='/profile' element={< Profile/>}></Route>
    <Route path='/editprofile' element={< EditProfile/>}></Route>
    
      
   
  </Routes>
  </BrowserRouter>

  </div>
  );

  }
export default App;