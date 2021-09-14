import { NavLink, useHistory } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
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
            {nav.name}
          </NavLink>
        ))}
      </div>
      {/* user detail card */}
      {pathname === "/my_paage" && (
        <Fragment>
          <UserDetail />
          <CreateMomet />
        </Fragment>
      )}

      {children}
    </div>
  );
};

export default MiddleFeed;
