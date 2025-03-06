// const navLinks = document.getElementById("nav-links");
// newMenu = document.getElementById("nav-menu");
// newClose = document.getElementById("nav-close");

// if (newMenu) {
//   newMenu.addEventListener("click", () => {
//     navLinks.classList.add("show-menu");
//   });
// }

// if (newClose) {
//   newClose.addEventListener("click", () => {
//     navLinks.classList.remove("show-menu");
//   });
// }
const navLinks = document.getElementById("nav-links");
const newMenu = document.getElementById("nav-menu");
const newClose = document.getElementById("nav-close");

if (newMenu) {
  newMenu.addEventListener("click", () => {
    navLinks.classList.add("show-menu");
  });
}

if (newClose) {
  newClose.addEventListener("click", () => {
    navLinks.classList.remove("show-menu");
  });
}

const Links = document.querySelectorAll("#link");

const linkAction = ()=>{
    const Action = document.getElementById('nav-links')

    Action.classList.remove('show-menu')
}
Links.forEach(element => element.addEventListener('click',linkAction));