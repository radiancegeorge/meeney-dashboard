import MyPages from "../MyPages"
import Options from "../Options"
import SwitchAccounts from "../SwithAccount/SwitchAccounts"

const LeftSectionFeed = () => {
    return(
        <div className="left">
            <SwitchAccounts />
            <Options />
            <MyPages />
        </div>
    )
}

export default LeftSectionFeed;