import Header from "../Header";
import LeftSectionFeed from "../LeftSectionFeed";
import RightFeed from "../RightFeed";

import testAvatar from "../../assets/img/Ellipse 4_.png";
import MiddleFeed from "../MiddleFeed";

const FeedContainer = ({ children }) => {
  return (
    <div className="home">
      <Header name="Jonathan Deo" img={testAvatar} />
      <div className="default__container">
        <div className="home__body">
          <LeftSectionFeed />
          <MiddleFeed>{children}</MiddleFeed>
          <RightFeed />
        </div>
      </div>
    </div>
  );
};

export default FeedContainer;
