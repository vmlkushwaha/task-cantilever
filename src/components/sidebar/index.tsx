import { ICONS } from "../../assets";
import { SidebarItemInterface } from "../../interface/SharedComponents";
import Button from "../../shared/components/button";
import SidebarItem from "../../shared/components/sidebarItem";
import "./style.scss";

const Sidebar = () => {
  const ITEMS = [
    {
      title: "Overview",
      icon: ICONS.sidebarIcons.overview,
    },
    {
      title: "Transaction",
      icon: ICONS.sidebarIcons.transaction,
    },
    {
      title: "Cards",
      icon: ICONS.sidebarIcons.cards,
    },
    {
      title: "Invoices",
      icon: ICONS.sidebarIcons.invoices,
    },
    {
      title: "Goals",
      icon: ICONS.sidebarIcons.goals,
    },
    {
      title: "Settings",
      icon: ICONS.sidebarIcons.setting,
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar_brand-logo">
        <img src={ICONS.Logo} alt="brand" />
      </div>
      <div className="sidebar_sidebarItems-container">
        {ITEMS.map((item: SidebarItemInterface) => {
          return (
            <SidebarItem key={item.title} title={item.title} icon={item.icon} />
          );
        })}
      </div>
      <div className="sidebar_upgrade-container">
        <img src={ICONS.premium} alt="premium banner" />
        <p className="info">Give your money awesome space in cloud</p>
        <Button
          title="Upgrade to premium"
          icon={ICONS.arrowUp}
          style={{ background: "#FFC145", marginTop: "0.5rem" }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
