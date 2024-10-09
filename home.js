// Toggle active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

let form1 = document.getElementById('register-form');
form1, addEventListener('submit', function(e) {
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let birthDate = document.getElementById('birthDate');

        if(name.value==""||email.value==""||password.value==""||confirmPassword.value==""||birthDate.value==""){
        this.document.getElementById('error').innerHTML
        ="<p>Please fill out all the fields</p>";
        e.preventDefault();
        } else if(name.value.length<3){
        this.document.getElementById('error').innerHTML
        ="<p>Please put your full real name</p>";
        e.preventDefault();
        } else if (password.length < 8) {
        this.document.getElementById('error').innerHTML
        ="<p>Password should be at least 8 characters long</p>";
        e.preventDefault();
        } 
});