//Scroll down and nav bar pop up


document.getElementById('navbar');
let prev = window.pageYOffset;

window.onscroll = function () {
let now = window.pageYOffset;

if (prev > now) {
navbar.classList.remove("hidenav");
navbar.classList.add("shownav");
} 
if (now < 500) { 
navbar.classList.add("hidenav");
navbar.classList.remove("shownav");
}
prev = now;

}





// document.getElementById('navbar');
// let prev = window.pageYOffset;

// window.onscroll = function () {
// let now = window.pageYOffset;

// if (prev > now) {
// navbar.classList.remove("hidenav");
// navbar.classList.add("shownav");
// }  else {
// navbar.classList.add("hidenav");
// }
// if (now < 500) { 
// navbar.classList.add("hidenav");
// navbar.classList.remove("shownav");
// }
// prev = now;

// }
