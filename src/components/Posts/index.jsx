import PostCard from "../PostCards";
import "./posts.css";
import photo from '../../assets/img/highres_488961989.png';
import testAvatar from "../../assets/img/Ellipse 267.png";

const Posts = () => {
    return (
        <div className="posts">
            <PostCard 
                photo={photo}
                avatar={testAvatar}
            />
            <PostCard 
                photo={photo}
                avatar={testAvatar}
            />
            <PostCard 
                photo={photo}
                avatar={testAvatar}
            />
        </div>
    )
}

export default Posts;