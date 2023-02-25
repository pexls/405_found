import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "../home/home.css";
import AllGroup from "./AllGroup";

export default function Group() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <AllGroup/>
        <Rightbar/>
      </div>
    </div>
  );
}