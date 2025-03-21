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
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr_2ZCFkoFpHGP5Xx3phKRGjQ9_KgSnUA",
  authDomain: "assignment-database-2ef78.firebaseapp.com",
  projectId: "assignment-database-2ef78",
  storageBucket: "assignment-database-2ef78.firebasestorage.app",
  messagingSenderId: "911375879915",
  appId: "1:911375879915:web:32b5c549787f9f52eef8ae",
  measurementId: "G-X588ZMZ95F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  set(
    ref(db, "UserData/" + document.getElementById("name").value),

    {
      userName: document.getElementById("name").value,
      location: document.getElementById("location").value,
      message: document.getElementById("message").value,
      email: document.getElementById("email").value,
    }
  );
  if (event) {
    msg.innerText = `your response has been recorded`;
  } else {
    msg.innerText = `please enter your response`;
  }
});

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

const linkAction = () => {
  const Action = document.getElementById("nav-links");

  Action.classList.remove("show-menu");
};
Links.forEach((element) => element.addEventListener("click", linkAction));
