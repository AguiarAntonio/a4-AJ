import NavBar from "../component/NavBar.jsx";


function Login() {

    const logoutPress = async function( event ) {
        showLoginForm()
        alert("Logged out")
        localStorage.clear()
        location.reload()
    }

    const signUp = async ( e ) => {
        e.preventDefault()

        const form = document.getElementById("loginForm")
        const formData = new FormData(form);

        const username = formData.get('username')
        const password = formData.get('password')

        const userPass = username + password

        localStorage.setItem(userPass, "user")
        location.reload()
    }

    const login = async ( e ) => {
        e.preventDefault()

        const form = document.getElementById("loginForm")
        const formData = new FormData(form);

        const username = formData.get('username')
        const password = formData.get('password')

        const userPass = username + password

        const storedVal = localStorage.getItem(userPass)

        if (storedVal) {
            alert("Logged in successfully")
            showLogoutButton()
        } else {
            alert("Log in failed")
        }


        console.log(username)
        console.log(password)
    }

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
                <button onClick={ signUp } type="submit" id="signUp">sign up</button>
                <button onClick={ login } type="submit" id="login">login</button>
            </form>
            <form id="logoutButton">
                <button onClick={ logoutPress } type="submit" id="logout">log out</button>
            </form>
        </>
    )
}

export default Login