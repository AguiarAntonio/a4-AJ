function showLoginForm() {
    document.getElementById("loginForm").style.display = 'block';
    document.getElementById('logoutButton').style.display = 'none';
}

function showLogoutButton() {
    document.getElementById("loginForm").style.display = 'none';
    document.getElementById('logoutButton').style.display = 'block';
}

const login = async function( event ) {
    event.preventDefault()

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

const signUp = async function( event ) {
    event.preventDefault()

    const form = document.getElementById("loginForm")
    const formData = new FormData(form);

    const username = formData.get('username')
    const password = formData.get('password')

    const userPass = username + password

    localStorage.setItem(userPass, "user")
    location.reload()
}

const logoutPress = async function( event ) {
    showLoginForm()
    alert("Logged out")
    localStorage.clear()
    location.reload()
}


window.onload = function() {

    showLoginForm()

    const loginButton = document.getElementById('login')
    const signUpButton = document.getElementById("signUp")
    const logoutButton = document.getElementById("logout")
    loginButton.onclick = login
    signUpButton.onclick = signUp
    logoutButton.onclick = logoutPress
}