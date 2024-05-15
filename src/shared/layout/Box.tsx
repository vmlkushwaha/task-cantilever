import React from "react";
import "../../styles/styles.scss";

interface Props {
  children?: React.ReactNode;
  style?: object;
  title?: string;
  className?: string;
}
const Box: React.FC<Props> = ({ children, style, title, className }) => {
  return (
    <div className={`layout_box ${className}`} style={{ ...style }}>
      <h2 className="layout_box-title">{title}</h2>
      <div className="layout_box-content">{children}</div>
    </div>
  );
};
export default Box;
