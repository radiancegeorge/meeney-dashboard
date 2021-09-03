import myPagesList from "../../utils/myPages";
import "./myPages.css";
import {CircleAdd, MoreOptionsIcon, Pin} from "../../assets/svg/Extras";
import {Search} from "../../assets/svg/NavBarIcons"
const MyPages = () => {
    return(
        <div className="my__pages">
            <div className="my__pages__header">
                <h2>My Pages</h2>
                <div className="new">
                    {/* some icon */}
                    <CircleAdd />
                    <span>Create new</span>
                </div>
            </div>
            <form className="my__pages__search">
                {/* icon to be placed */}
                <div className="search__icon">
                    <Search 
                        width="11px"
                        height="11px"
                        fill="var(--text-grey)"
                    />
                </div>
                <input type="text" placeholder="Search pages" />
            </form>
            <div className="existing__pages">
                {
                    myPagesList.map((page, idx) => (
                        <div className="wrap">
                            <div className="page">
                                <div className="avatar">
                                    <img src={page.avatar} alt="avatar" />
                                </div>
                                <div className="business__name">
                                    {page.name}
                                    <small>{page.pageType}</small>
                                </div>
                                <div className="icons">
                                    <div className="menu">
                                        <MoreOptionsIcon 
                                            fill="var(--dark-purple-bg)"
                                        />
                                    </div>
                                    <div className="pin__icon">
                                        <Pin 
                                            fill="var(--dark-purple-bg)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) )
                }
                {/* options */}
            </div>
        </div>
    )
}
export default MyPages;