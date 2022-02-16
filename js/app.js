document.getElementById('login-btn').addEventListener("click", function() {
    const emailInput = document.getElementById('email-input').value;
    const passwrodInput = document.getElementById('password-input').value;
    console.log("clicked", emailInput, passwrodInput);

    if (emailInput === 'admin.gmail.com' && passwrodInput === 1234) {
        console.log('done');
    }
});