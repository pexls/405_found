import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from 'react-router-dom';


import "./profile.css"

const EditProfile = () => {

    const [showProfile, setShowProfile]=useState([])

    useEffect(()=>{
      getProfileEdit();
    }, []);

    const getProfileEdit = ()=>{

      axios.get('http://localhost/405_found/back_end/profile.php')
        .then(function(response){
         // console.log(response.data); 
          setShowProfile(response.data);  
      } )

      
    }


 

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          
          <div className="profileRightTop">

            <div className="profileCover">

              <img className="profileCoverImg" src="./assets/post/3.jpg" alt="" />
              <img className="profileUserImg" src="./assets/person/7.jpg" alt="" />
          
            </div>
            {showProfile.map((user, key)=>
            <div key={key} className="profileInfo">
              <h4 className="profileInfoName">{user.fullName}</h4>
              <span className="profileInfoDesc">{user.email}</span>
              <span className="profileInfoDesc">{user.phone}</span>
            </div>

            
            )}

          </div>
          
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
          </div>


        </div>

      </div>
    </>
  )
}

export default EditProfile