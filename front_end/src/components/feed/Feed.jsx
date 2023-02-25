import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData/dummyData";

export default function Feed() {
  return (
    <div className="deev">
    
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
     
     </div>
  );
}