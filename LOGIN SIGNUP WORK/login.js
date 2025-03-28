// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB6xItBCsAM10Lyd3OzA9S_jk9rDoLYFJI",
//   authDomain: "assignment-login-9d464.firebaseapp.com",
//   projectId: "assignment-login-9d464",
//   storageBucket: "assignment-login-9d464.firebasestorage.app",
//   messagingSenderId: "711038864118",
//   appId: "1:711038864118:web:b9fa04cfc08fd7d61afad7",
//   measurementId: "G-LK3HJXSGQ8",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//  document.getElementById("login").addEventListener('click', function (event) {
//     event.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         alert("Login Successfully");
//          // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage);
//       });
//   });
// // submit.addEventListener("click", function (event) {
// //   event.preventDefault();
// //   const email = document.getElementById("email").value;
// //   const password = document.getElementById("password").value;
// //   const auth = getAuth();
// //   signInWithEmailAndPassword(auth, email, password)
// //     .then((userCredential) => {
// //       // Signed in
// //       const user = userCredential.user;
// //       alert("Login Successfully");
// //       //   window.location.href = "index.html"
// //       // ...
// //     })
// //     .catch((error) => {
// //       const errorCode = error.code;
// //       const errorMessage = error.message;
// //       alert(errorMessage);
// //     });
// // });

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVfXMk7gyA6b1Ui2jvnKIaskd9NQEPo4g",
  authDomain: "assignment-login2.firebaseapp.com",
  projectId: "assignment-login2",
  storageBucket: "assignment-login2.firebasestorage.app",
  messagingSenderId: "570982621773",
  appId: "1:570982621773:web:279a50be5104219146f204",
  measurementId: "G-7CS6L4WS90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const login = document.getElementById("login");
login.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Login successfully");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
