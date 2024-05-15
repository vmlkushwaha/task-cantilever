import { ICONS } from "../../assets";
import "./style.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <h1>Weekly sumup</h1>
        <p>Get summary of your weekly online transactions here.</p>
      </div>
      <div className="navbar_right">
        <img src={ICONS.mail} />
        <img src={ICONS.bell} />
        <div className="navbar_right_profile">
          <img src={ICONS.user} />
          <div>
            <p className="username">Andrew</p>
            <p className="account-type">Admin account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
