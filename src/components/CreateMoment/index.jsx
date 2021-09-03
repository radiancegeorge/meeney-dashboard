import momentOptions from "../../utils/momentOptions";
import "./createMomet.css";

const CreateMomet = () => {
    return (
        <form className="create__moment">
            <div className="new__moment">
                <input type="text" placeholder="Share Your Moments" />
                <button type="submit">Post</button>
            </div>
            <div className="select__to__upload">
                {
                    momentOptions.map((item, idx) => (
                        <div className="type__" key={idx}>
                            <div className="icon">
                                <item.icon />
                            </div>
                            <div className="name">{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </form>
    )
}
export default CreateMomet;