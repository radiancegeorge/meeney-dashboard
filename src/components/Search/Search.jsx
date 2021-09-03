import { Search as Icon } from "../../assets/svg/NavBarIcons"
const Search = () => {
    return(
        <div className="search">
            <div className="search__icon">
                {/* search icon */}
                <Icon />
            </div>
            <input type="search"  placeholder="Search"/>
         </div>
    )
}
export default Search