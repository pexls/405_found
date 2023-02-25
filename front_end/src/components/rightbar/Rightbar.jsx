import "./rightbar.css";
import { Users } from "../../dummyData/dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <div className="right">
  <div className="messages">
    <div className="heading">
      <h4>Messages</h4>
      <span><i className="uil uil-edit"></i></span>
    </div>
    <div className="search-bar">
  <span><i className="uil uil-search"></i></span>
  <input type="search" placeholder="Search Messages" id="message-search" />
</div>

<div className="category">
  <h6 className="active">Primary</h6>
  <h6>General</h6>
  <h6 className="message-requests">Requests(7)</h6>
</div>
<div className="message">
  <div className="profile-pic">
    <img src="images/profile-17.jpg" />
    <div className="active"></div>
  </div>
  <div className="message-body">
    <h5>Kareena Joshua</h5>
    <p className="text-muted">Just woke up bruh..</p>
  </div>
</div>
<div className="message">
  <div className="profile-pic">
    <img src="images/profile-18.jpg" />
    <div className="active"></div>
  </div>
  <div className="message-body">
    <h5>Dan Smith</h5>
    <p className="text-bold">2 New Messages</p>
  </div>
</div>
<div className="message">
  <div className="profile-pic">
    <img src="images/profile-15.jpg" />
  </div>
  <div className="message-body">
    <h5>Chris Brown</h5>
    <p className="text-muted">Lol u right</p>
  </div>
</div>
<div className="message">
  <div className="profile-pic">
    <img src="images/profile-14.jpg" />
  </div>
  <div className="message-body">
    <h5>Lana Rose</h5>
    <p className="text-bold">Birthday tomorrow!!</p>
  </div>
</div>
<div className="message">
  <div className="profile-pic">
    <img src="images/profile-11.jpg" />
  </div>
  <div className="message-body">
    <h5>Varun Nair</h5>
    <p className="text-muted">Ssup?</p>
  </div>
</div>
<div className="message">
  <div className="profile-pic">
    <img src="images/profile-1.jpg" />
    <div className="active"></div>
  </div>
  <div className="message-body">
    <h5>Jahnvi Doifode</h5>
    <p className="text-bold">3 New Messages</p>
  </div>
</div>
</div>
</div><div className="friend-requests">
  <h4>Requests</h4>
  <div className="request">
    <div className="info">
      <div className="profile-pic">
        <img src="images/profile-13.jpg" alt="Profile" />
      </div>
      <div>
        <h5>Wilson Fisk</h5>
        <p className="text-muted">8 mutual friends</p>
      </div>
    </div>
    <div className="action">
      <button className="btnm btnm-primary">Accept</button>
      <button className="btnm">Decline</button>
    </div>
  </div>
  <div className="request">
    <div className="info">
      <div className="profile-pic">
        <img src="images/profile-20.jpg" alt="Profile" />
      </div>
      <div>
        <h5>Srishti Tirkey</h5>
        <p className="text-muted">2 mutual friends</p>
      </div>
    </div>
    <div className="action">
      <button className="btnm btnm-primary">Accept</button>
      <button className="btnm">Decline</button>
    </div>
  </div>
  <div className="request">
    <div className="info">
      <div className="profile-pic">
        <img src="images/profile-5.jpg" alt="Profile" />
      </div>
      <div>
        <h5>Christ Kahea</h5>
        <p className="text-muted">1 mutual friend</p>
      </div>
    </div>
    <div className="action">
      <button className="btnm btnm-primary">Accept</button>
      <button className="btnm">Decline</button>
    </div>
  </div>
</div>

      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}