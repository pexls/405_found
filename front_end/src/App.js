import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Register from "./pages/register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleGroup from "./pages/Groups/SingleGroup"
<<<<<<< HEAD
import Group from "./pages/Groups/Group";
=======
import { Routes, Route } from "react-router-dom";
import Groups from "./pages/Groups/Groups";
>>>>>>> a00bbf162dafe257270666a3aa3dcd27d0520bdc



function App() {
<<<<<<< HEAD
  return <Group/>;
=======
  return(
    <div>
  <Routes>
     <Route path="/home" element={ <Home/> } />
     <Route path="/" element={ <Login/> } />
     <Route path="/register" element={ <Register/> } />
     <Route path="/SingleGroup" element={ <SingleGroup/> } />
     <Route path="/Profile" element={ <Profile/> } />
     <Route path="/group" element={ <Groups/> } />

   </Routes>
</div>
)

>>>>>>> a00bbf162dafe257270666a3aa3dcd27d0520bdc
}


export default App;