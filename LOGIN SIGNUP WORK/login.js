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

const login = document.getElementById("login");
login.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();
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
