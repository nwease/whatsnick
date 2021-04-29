import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBuNWSleX4lEgl_iE8RvhkILPKZQ_WWCos",
    authDomain: "whatsnick-3afee.firebaseapp.com",
    projectId: "whatsnick-3afee",
    storageBucket: "whatsnick-3afee.appspot.com",
    messagingSenderId: "817197024371",
    appId: "1:817197024371:web:3b536323e71af41d4dd606",
    measurementId: "G-G5QRBFRE8L"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
