async function getacc() {
    const jwt = "Bearer " + token;
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': jwt }
    };

    const response = await fetch('https://localhost:5001/my_account', requestOptions);

    if (response.ok) {
        const data = await response.json();
        return data.email;
    }
}

const email = document.getElementById("username-field");
const pass = document.getElementById("password-field");

getacc().then((value) => email.setAttribute("placeholder", value));
name = sessionStorage.getItem("name");
pass.setAttribute("placeholder", name);