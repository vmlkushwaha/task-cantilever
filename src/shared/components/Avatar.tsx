import "../../styles/styles.scss";

const Avatar = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <div className="avatar">
      <img src={icon} />
      <p>{name}</p>
    </div>
  );
};

export default Avatar;
