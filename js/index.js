// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js';
// import {
// 	getAuth,
// 	signInWithEmailAndPassword
// } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js';

// const firebaseApp = initializeApp({
// 	apiKey: "AIzaSyCZ9nrd2HsHvyLeWQeBzuqzzatjjoHbwCk",
// 	authDomain: "se-lab-cc915.firebaseapp.com",
// 	databaseURL: "https://se-lab-cc915-default-rtdb.firebaseio.com",
// 	projectId: "se-lab-cc915",
// 	storageBucket: "se-lab-cc915.appspot.com",
// 	messagingSenderId: "621591600946",
// 	appId: "1:621591600946:web:5086200597205b089d412b",
// 	measurementId: "G-6C043GV72T"
// });

// const loginEmailPassword = async () => {
// 	const loginEmail = document.getElementById('email').value
// 	const loginPassword = document.getElementById('password').value

// 	try {
// 		await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
// 		window.location.href = './dashboard.html';
// 	}
// 	catch (error) {
// 		console.log(`There was an error: ${error}`)
// 		alert("Invalid credentials or user doesn't exists");
// 		var login = document.getElementById("login");
// 		login.innerHTML = "Login again";
// 	}
// }
// btn.addEventListener("click", loginEmailPassword)
// const auth = getAuth(firebaseApp);
