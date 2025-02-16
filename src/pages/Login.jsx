import NavBar from "../component/NavBar.jsx";


function Login() {
    return (
        <>
            <NavBar/>
            <h1 className="myName">AJ Aguiar</h1>
            <h1 id="assignment">CS4241 Assignment 3</h1>
            <form id="loginForm">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" placeholder="Username:"/>
                <br/>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name="password" placeholder="Password:"/>
                <br/>
                <button type="submit" id="signUp">sign up</button>
                <button type="submit" id="login">login</button>
            </form>
            <form id="logoutButton">
                <button type="submit" id="logout">log out</button>
            </form>
        </>
    )
}

export default Login