import SuggestedListings from "../SuggestedListings";
import SuggestedUsers from "../SuggestedUsers";
import "./rightFeed.css";

const RightFeed = () => {
  return (
    <div className="right">
      <SuggestedListings />
      <SuggestedUsers />
    </div>
  );
};

export default RightFeed;
