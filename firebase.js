// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get, onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwISHPEBgBixOR9x5xSEdu7Fb5NpNtyQc",
    authDomain: "apex-webdev.firebaseapp.com",
    databaseURL: "https://apex-webdev-default-rtdb.firebaseio.com",
    projectId: "apex-webdev",
    storageBucket: "apex-webdev.appspot.com",
    messagingSenderId: "119052131768",
    appId: "1:119052131768:web:fa230f9cf54c645085434d",
    measurementId: "G-JCHSW0NT3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function writeUserData(username, newUser) {
    await set(ref(db, 'users/' + username), newUser);
};

const dbRef = ref(getDatabase());
export let response = '';
export async function readdata(name) {


    const snapshot = await get(child(dbRef, `users/${name}`));

    if (snapshot.exists()) {
        response = await snapshot.val();
    } else {
        return '';
    }
};

const db = getDatabase();
export let allData = [];

export  async function  readAllData() {
    const db = getDatabase();
    const dbRef = ref(db);
    get(child(dbRef, "users/"))
    .then((snapshot)=> {
        snapshot.forEach(element => {
            allData.push(element.val());
        });
    })
}






