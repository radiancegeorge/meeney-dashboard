import { Save } from "../../assets/svg/PostCardIcon";
import "./suggestedUsers.css";
import testAvatar from "../../assets/img/Ellipse 267.png";
import suggestedPages from "../../utils/suggestedPages";

const SuggestedUsers = () => {
  return (
    <div className="suggested__users">
      <div className="tab">
        <p>Suggested Users</p>
        <p className="active">Suggested pages</p>
      </div>
      <div className="__container">
        {suggestedPages.map((item, idx) => (
          <div className="item" key={idx}>
            <div className="avatar">
              <img src={testAvatar} alt="avatar" />
            </div>
            <div className="detail">
              <div className="name">{item.name}</div>
              <div className="state">{item.state}</div>
            </div>
            <div className="support"> Support</div>
            <div className="save">
              <Save />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;
