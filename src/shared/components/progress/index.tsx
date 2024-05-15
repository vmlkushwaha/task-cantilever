import { ProgressInterface } from "../../../interface/SharedComponents";
import "../../../styles/styles.scss";
const Progress = ({
  fill,
  label,
  maxValue = 0,
  minValue = 0,
  style,
  fillColor,
}: ProgressInterface) => {
  return (
    <div className="progress_bar-container" style={{ ...style }}>
      <div className="progress_bar">
        <div
          className="progress_bar-fill"
          style={{ width: fill, backgroundColor: fillColor }}></div>
      </div>
      <div className="progress_bar-info">
        <label>{label}</label>
        {maxValue > 0 && <p>{`$${minValue}  /  $${maxValue}`}</p>}
      </div>
    </div>
  );
};

export default Progress;
