const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Rox" && password === "00416") {
        window.open("main.html", "_self");
    }
    else if (username === "Lor" && password === "00466") {
        window.open("main.html", "_self");
    }
    else if (username === "Loy" && password === "00403") {
        window.open("main.html", "_self");
    }
    else if (username === "marvs" && password === "00622") {
        window.open("main.html", "_self");
    }
    else if (username === "DPS" && password === "00051") {
        window.open("main.html", "_self");
    }
    else if (username === "Val" && password === "00060") {
        window.open("main.html", "_self");
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }

})
