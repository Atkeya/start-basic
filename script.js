const VALID_USERNAME = 'demo';
const VALID_PASSWORD = 'Password123';

document.getElementById('sign-in-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');

    messageElement.textContent = '';
    messageElement.className = 'message';

    if (username === '' && password === '') {
        messageElement.textContent = 'Both fields need to be filled up to get in!';
        messageElement.className = 'error message';
    } else if (username === '') {
        messageElement.textContent = 'Input your User Name! It cannot be empty!';
        messageElement.className = 'error message';
    } else if (password === '') {
        messageElement.textContent = 'Input your PassCode! It cannot be empty!';
        messageElement.className = 'error message';
    } else if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
        messageElement.textContent = 'Invalid username or password.';
        messageElement.className = 'error message';
    } else {
        messageElement.textContent = 'Signed in Successfully!';
        messageElement.className = 'success message';
    }
});