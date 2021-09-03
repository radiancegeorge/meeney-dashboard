import { NavLink } from "react-router-dom";
import { others } from "./others";
import "./userDetail.css";
import testAvatar from "../../assets/img/Ellipse 267.png"

const UserDetail = () => {
    return (
        <div className="user__detail">
            <div className="avatar">
                <img src={testAvatar} alt="avatar" />
            </div>
            <div className="name__about">
                <div className="name__">
                    <h1>Rose Kooto</h1>
                    <small>Username</small>
                    <div className="about">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </div>
                </div>
            </div>
            <div className="extra__data">
                <div className="top">
                    <p>
                        105
                        <small>
                            post
                        </small>
                    </p>
                    <p>
                        7,080
                        <small>
                            Followers
                        </small>
                    </p>
                    <p>
                        1,500
                        <small>
                            Following
                        </small>
                    </p>
                    <p>
                        1,500
                        <small>
                            Supporting
                        </small>
                    </p>
                </div>
                <div className="following">
                    Following
                </div>
                <div className="others">
                    {
                        others.map((item, idx) => (
                            <NavLink to={item.link} key={idx}>
                                {item.name}
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default UserDetail;