const container = document.querySelector('.container');
const RegisterBtn = document.querySelector('.register-btn');
const LoginBtn = document.querySelector('.login-btn');
 
RegisterBtn.addEventListener('click', () => {
    container.classList.add('active');
});
LoginBtn.addEventListener('click', () =>{
    container.classList.remove('active');
});
const popup = document.querySelector(".popup");

document.getElementById('Reg').addEventListener('click', function () {
    popup.classList.add("active"); // Show the popup smoothly
});

document.getElementById('close').addEventListener('click', function () {
    popup.classList.remove("active"); // Hide the popup smoothly
});
