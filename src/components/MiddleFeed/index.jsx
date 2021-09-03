import { NavLink } from "react-router-dom"
import middleFeedNav from "../../utils/middleFeedNav";
import CreateMomet from "../CreateMoment";
import Posts from "../Posts";
import UserDetail from "../UserDetail";
import "./middleFeed.css"


const MiddleFeed = () => {
    return(
        <div className="center">
            <div className="center__menu">
                {
                    middleFeedNav.map((nav, idx) => (
                        <NavLink key={idx} to={nav.link} className={`${middleFeedNav.indexOf(nav) === 2 && "active"}`}>
                            {nav.name}
                        </NavLink>
                    ))
                }
            </div>
            {/* user detail card */}
            <UserDetail />
            <CreateMomet />
            <Posts />
        </div>
    )
}

export default MiddleFeed;