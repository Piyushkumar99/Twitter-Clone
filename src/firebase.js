import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBetfr0dvneHUWsBypmv7GeBTsReyUPk40",
    authDomain: "twitter-clone-a3d69.firebaseapp.com",
    projectId: "twitter-clone-a3d69",
    storageBucket: "twitter-clone-a3d69.appspot.com",
    messagingSenderId: "386448888719",
    appId: "1:386448888719:web:bcc7fb860fffebf1cdb1fa",
    measurementId: "G-XX8Z8HBGK0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;