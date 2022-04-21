async function loginRequest(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
    };

    const response = await fetch('https://localhost:5001/login', requestOptions)
    if (!response.ok) {
        alert("request error");
    }
    else {
        const token = await response.text();
        sessionStorage.setItem('JWT', token);
        window.location.replace("index.html");
    }
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    loginRequest(email, password);
})