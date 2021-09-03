import "./postCard.css";
import { Heart, Comment, Save, Share } from "../../assets/svg/PostCardIcon";
import {MoreOptionsIcon} from "../../assets/svg/Extras"
import postCardOptions from "../../utils/postCardOptions";
import { useState } from "react";
import testAvatarCommentSection from "../../assets/img/Ellipse 357.png"

const PostCard = ({photo, avatar}) => {

    const [isOptionsVisible, setIsOptionsVisible] = useState();



    const options = isOptionsVisible &&
    ( 
        <ul className="option__">
        {
            postCardOptions.map((opt, idx) => (
                <li> 
                    {/* some icon */}
                    <opt.icon />
                    <p> {opt.name}</p>
                </li>
            ))
        }
        </ul>
    )


    return (
        <div className="post__card" 
            onClick={e => isOptionsVisible && setIsOptionsVisible(null)}
        >
            <div className="post__photo">
                <img src={photo} alt="photo__" />
            </div>
            <div className="section__2">
                <div className="post__comment__section">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="name">
                        <div className="full__name">Rose Koote</div>
                        <ul className="other__detail">
                            <li>Abuja</li>
                            <li>11hr ago</li>
                            <li>200 Likes</li>
                            <li>20 Replies</li>
                        </ul>
                    </div>
                </div>
                <div className="post">
                    is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since
                     the 1500s, when an unknown printer took a galley of type and 
                     scrambled it to make a type specimen book.
                </div>
                <div className="comment">
                    <h5>View all comments</h5>
                    <div className="section__">
                        <div className="avatar">
                            <img src={testAvatarCommentSection} alt="user" />
                        </div>
                        <div className="detail">
                            <div className="name">
                                Rose Koote
                            </div>
                            <small className="last__seen">Last Seen 11hr</small>
                            <div className="main__comment">
                                is simply dummy text of the printing and typesetting industry. Lorem
                                 Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley of 
                                  type Read more....
                            </div>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <div className="icon">
                        <Heart />
                    </div>
                    <div className="icon">
                        <Comment />
                    </div>
                    <div className="icon">
                        <Save />
                    </div>
                </div>
            </div>
            <div className="extra__options">
                <div className="more__options" 
                
                onClick={e => setIsOptionsVisible(!isOptionsVisible)}>
                    <MoreOptionsIcon />
                </div>
                <div className="share__">
                    <Share />
                </div>
            </div>
            {options}
        </div>
    )
}

export default PostCard