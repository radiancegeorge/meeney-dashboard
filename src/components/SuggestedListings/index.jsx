import "./suggestedListings.css";
import testAvatar from "../../assets/img/Ellipse 267.png";
import suggestedListings from "../../utils/suggestedListings";
const SuggestedListings = () => {
    return (
        <div className="suggested__listings">
            <h2>Suggested Listings</h2>
            <div className="listings__container">
                {
                    suggestedListings.map((item, idx) => (
                        <div className="item__" key={idx}>
                            <div className="avatar">
                                <img src={testAvatar} alt="avatar" />
                            </div>
                            <div className="item__info">
                                <div className="__name">
                                    {item.name}
                                </div>
                                <div className="__store">
                                    {item.store}
                                </div>
                                <div className="orders__left">
                                    <div className="__left">{item.left} Orders Left</div>
                                    <progress value={item.percentage} max="100"></progress>
                                </div>
                            </div>
                            <button className="order">Order</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SuggestedListings;