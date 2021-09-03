import './switchAccounts.css'
const SwitchAccounts = () => {
    return(
        <div className="switch__accounts">
            <h2>Switch Account</h2>
            <div className="types">
                <div className="social">
                    <p>Social</p>
                    <small className="count">50+</small>
                </div>
                <div className="business">
                    <p>Business</p>
                    <small className="count">50+</small>
                </div>
            </div>
        </div>
    )
}

export default SwitchAccounts;