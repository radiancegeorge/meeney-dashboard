import Header from "../../components/Header";
import LeftSectionFeed from "../../components/LeftSectionFeed";
import MiddleFeed from "../../components/MiddleFeed";
import "./home.css";
import testAvatar from "../../assets/img/Ellipse 4_.png";
import RightFeed from "../../components/RightFeed";

const Home = () => {
  return (
    <div className="home">
      <Header name="Jonathan Deo" img={testAvatar} />
      <div className="default__container">
        <div className="home__body">
          <LeftSectionFeed />
          <MiddleFeed />
          <RightFeed />
        </div>
      </div>
    </div>
  );
};
export default Home;
