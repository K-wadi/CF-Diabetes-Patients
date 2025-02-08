document.addEventListener("DOMContentLoaded", function () {
    const showLogin = document.getElementById("showLogin");
    const showRegister = document.getElementById("showRegister");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const errorMsg = document.getElementById("errorMsg");

    // تبديل بين تسجيل الدخول والتسجيل
    showLogin.addEventListener("click", () => {
        loginForm.classList.remove("d-none");
        registerForm.classList.add("d-none");
    });

    showRegister.addEventListener("click", () => {
        registerForm.classList.remove("d-none");
        loginForm.classList.add("d-none");
    });

    // تسجيل مستخدم جديد
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(user => user.email === email)) {
            errorMsg.textContent = "Dit e-mailadres is al geregistreerd!";
            return;
        }

        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registratie succesvol! U kunt nu inloggen.");
        window.location.href = "login.html";
    });

    // تسجيل الدخول
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            window.location.href = "dashboard.html";
        } else {
            errorMsg.textContent = "Ongeldig e-mail of wachtwoord!";
        }
    });
});
