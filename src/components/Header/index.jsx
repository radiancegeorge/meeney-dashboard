import Search from "../Search/Search";
import "./header.css";
import {Message, Notification} from '../../assets/svg/NavBarIcons';
import Flag from '../../assets/img/Image 1.png';
import Logo from '../../Logo'
import Down from "../../assets/svg/Down";
const Header = ({name, img}) => {
    return (
        <div className="header">
            {/* stled circle @ header */}
            <div className="styled__circles"></div>
            <div className="styled__circles"></div>
            <div className="default__container">
                <nav>
                    <div className="profile__">
                        <div className="pic">
                            <img src={img} alt="avatar" />
                        </div>
                        <div className="more">
                            {/* more icon */}
                            <Down />
                        </div>
                        <div className="full__name">
                            {name}
                        </div>
                    </div>
                    <div className="other__">
                        <div className="icon">
                            <img src={Flag} alt="" />
                        </div>
                        <div className="icon">
                            <Message />
                            <small className="badge">20</small>
                        </div>
                        <div className="icon">
                            <Notification />
                            <small className="badge">50+</small>
                        </div>
                        <Search />
                        <div className="logo">
                            {/* logo */}
                            <Logo />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header