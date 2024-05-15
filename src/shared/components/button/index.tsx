import { ICONS } from "../../../assets";
import { ButtonInterface } from "../../../interface/SharedComponents";
import "../../../styles/styles.scss";
const Button = ({ title, icon, style }: ButtonInterface) => {
  return (
    <button className="main-button" style={{ ...style }}>
      <p>{title}</p>
      {icon && <img src={icon} alt="icon" />}
    </button>
  );
};

export const AddNewButton = ({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) => {
  return (
    <div className={`addNew-button ${className}`}>
      <img src={ICONS.addNewButton} />
      {title && title.length > 0 && <p>{title}</p>}
    </div>
  );
};

export default Button;
