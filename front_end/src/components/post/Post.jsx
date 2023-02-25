import "./post.css";
import { MdOutlineMoreVert } from 'react-icons/md';
import { Users } from "../../dummyData/dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="feed">
    <div className="user">
        <div className="profile-pic">
            <img src="images/profile-18.jpg" alt="" />
        </div>
        <div className="info">
            <h3>Dan Smith</h3>
            <small>Paris, 1 DAY AGO</small>
        </div>
        <span className="edit"><i className="uil uil-ellipsis-h"></i></span>
    </div>
    <div className="photo">
        <img src="images/feed-5.jpg" alt="" />
    </div>
    <div className="action-button">
        <div className="interaction-button">
            <span><i className="uil uil-thumbs-up"></i></span>
            <span><i className="uil uil-comment"></i></span>
            <span><i className="uil uil-share"></i></span>
        </div>
        <div className="bookmark">
            <span><i className="uil uil-bookmark"></i></span>
        </div>
    </div>
    <div className="liked-by">
        
        <p>Liked by <b>Enrest Achiever</b> and <b>420 others</b></p>
    </div>
    <div className="caption">
        <p><b>Dan Smith</b> Lorem ipsum dolor storiesquiquam eius. <span className="hash-tag">#lifestyle</span></p>
    </div>
    <div className="comments text-muted">View all 120 comments</div>
</div>

  );
}