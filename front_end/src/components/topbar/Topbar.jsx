import "./topbar.css";
import { BsSearch,BsFillPersonFill,BsFillChatFill } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img className="logo" src="images/Untitled-1.png" alt="" />
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <BsSearch className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <BsFillChatFill />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <MdNotifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}