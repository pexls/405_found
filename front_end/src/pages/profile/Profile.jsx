import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
// import { useState, useEffect } from "react";
// import axios from "axios";

import "./profile.css"

export default function Profile() {

 

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

            <div className="profileInfo">
              <h4 className="profileInfoName">mohammed al maslamani</h4>
              <span className="profileInfoDesc">full stack web divlobar</span>
            </div>

            


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

