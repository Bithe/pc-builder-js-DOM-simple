document.getElementById('login-btn').addEventListener("click", function() {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;
    const passwrodInput = document.getElementById('password-input');
    const password = passwrodInput.value;
    console.log("clicked", email, password);

    if (email === 'admin@gmail.com' && password === '123') {
        window.location.href = 'pc-builder.html';

    }
});