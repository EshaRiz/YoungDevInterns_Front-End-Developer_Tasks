// Form validation
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        alert('All fields are required!');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    alert('Form submitted successfully!');
});

// Modal popup functionality
const modal = document.getElementById('myModal');
const btn = document.getElementById('modalBtn');
const span = document.querySelector('.close');

btn.onclick = function() {
    modal.style.display = 'block';
};

span.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
