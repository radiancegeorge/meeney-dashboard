import { NavLink, useHistory } from "react-router-dom";
import middleFeedNav from "../../utils/middleFeedNav";
import CreateMomet from "../CreateMoment";
import UserDetail from "../UserDetail";
import "./middleFeed.css";

const MiddleFeed = ({ children }) => {
  const history = useHistory();

  const { pathname } = history.location;
  const addActiveToLink = (link) => {
    if (pathname === link) return "active_link";
    return;
  };
  return (
    <div className="center">
      <div className="center__menu">
        {middleFeedNav.map((nav, idx) => (
          <NavLink
            key={idx}
            to={nav.link}
            className={addActiveToLink(nav.link)}>
            {console.log(nav.link, pathname)}
            {nav.name}
          </NavLink>
        ))}
      </div>
      {/* user detail card */}
      <UserDetail />
      <CreateMomet />
      {children}
    </div>
  );
};

export default MiddleFeed;
