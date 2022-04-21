const idForm = document.getElementById("id-form");
const subButton = document.getElementById("id-form-submit");
const LoginButton = document.getElementById("LoginBtn");
const accLink = document.getElementById("accLink");

const token = sessionStorage.getItem('JWT');

async function getname() {
    const jwt = "Bearer " + token;
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': jwt }
    };

    const response = await fetch('https://localhost:5001/my_account', requestOptions);

    if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("name", data.username);
        return data.username;
    }
}

if(token){
    getname().then((value) => LoginButton.innerHTML = value);
    accLink.setAttribute("href", "index.html")
}else{
    LoginButton.innerHTML = "Log In";
}

LoginButton.addEventListener("click", (e) => {
    if(token){
        sessionStorage.removeItem("JWT");
        window.location.replace("index.html");
    }else{
        window.location.replace("login.html");
    }
})

async function getQueue(id) {
    if (token) {
        const authoken = "Bearer " + token;
        const qrequestOptions = {
            method: 'GET',
            headers: { 'Authorization': authoken }
        };

        const qresponse = await fetch(`https://localhost:5001/event/${id}`, qrequestOptions);

        if (qresponse.ok) {
            const qdata = await qresponse.json();
            sessionStorage.setItem('Data', JSON.stringify(qdata));
            const qlistresponse = await fetch(`https://localhost:5001/get_queue/${id}`, qrequestOptions);
            const qlist = await qlistresponse.json();
            sessionStorage.setItem('List', JSON.stringify(qlist));
            window.location.replace("queue.html");
        }
        else{
            alert("error");
        }
    }
    else {
        window.location.replace("login.html");
    }
}

subButton.addEventListener("click", (e) => {
    e.preventDefault();
    const id = idForm.id.value;

    if (id) {
        getQueue(id);
    } else {
        alert("input id please");
    }
})