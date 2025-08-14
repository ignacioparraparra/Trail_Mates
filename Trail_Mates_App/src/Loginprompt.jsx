import './homePage.css'

function Loginprompt() {
    return(
        <div className="loginCard">
            <p>Sign In</p>
            <label id="username">Username: </label>
            <input type="text" required placeholder="Username"></input>
            <label id="password">Password: </label>
            <input type="password" required placeholder="Password"></input>
            <a href="">Forgot password?</a>
            <input type="submit"></input>
        </div>
    );
}

export default Loginprompt