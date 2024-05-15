import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import "./styles/styles.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main_sidebar">
        <Sidebar />
      </div>
      <div className="main_outlet">
        <Navbar />
        <div className="main_outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
