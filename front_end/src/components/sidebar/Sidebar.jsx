import "./sidebar.css";
import { MdRssFeed,MdHelpOutline } from 'react-icons/md';
import {BsFillChatFill,BsPlayCircle,BsFillBookmarkFill} from 'react-icons/bs';
import { BiGroup,BiCalendarEvent } from 'react-icons/bi';
import { IoMdSchool } from 'react-icons/io';
import { Users } from "../../dummyData/dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <BsFillChatFill className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <BsPlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <BiGroup className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
        
        
          <li className="sidebarListItem">
            <span className="sidebarListItemText">My Groups</span>
          </li>
          <li className="sidebarFriend"><img className="sidebarFriendImg" src="assets/person/1.jpeg" alt="" /><span className="sidebarFriendName">Safak Kocaoglu</span></li>
         <li>{Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}</li> 
        </ul>
        
        
          
       
      </div>
    </div>
  );
}