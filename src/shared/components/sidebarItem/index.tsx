import { useLocation } from "react-router-dom";
import { SidebarItemInterface } from "../../../interface/Sidebar";
import "../../../styles/styles.scss";
const SidebarItem = (props: SidebarItemInterface) => {
  const location = useLocation();
  console.log(location);

  return (
    <div
      className={
        props.title === "Overview" ? "sidebar-item-active" : "sidebar-item"
      }>
      <div>
        <img src={props.icon} />
      </div>
      <p className="lato-regular">{props.title}</p>
    </div>
  );
};

export default SidebarItem;
