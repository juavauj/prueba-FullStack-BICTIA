// Boton de Navicon Responsive

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

// Nombre de usuario en Navbar
let localuser = JSON.parse(localStorage.user);
console.log(localuser.user)
document.getElementById("usuario").innerHTML = `¡Bienvenido, ${localuser.user}!`;

// Navbar fijo
window.onscroll = function() { myFunction() };

let header = document.getElementById("miNavbar");

let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}