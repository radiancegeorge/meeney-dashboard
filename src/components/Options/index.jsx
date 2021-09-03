import {
    NavLink
} from "react-router-dom";
import options from "../../utils/options";
import "./options.css"
const Options = () => {
    return(
        <div className="options">
            {
                options.map((opt, idx) => (
                    <NavLink key={idx} to={opt.link}>
                        {/* <img src={opt.icon} alt="icon" /> */}
                        <opt.icon />
                        <span className="text">
                            {opt.name}
                        </span>
                    </NavLink>
                ))
            }
        </div>
    )
}
export default Options