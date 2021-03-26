import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAgXhiw-1a5b6FH5BM-PYd8g6gwQhtMX9w",
    authDomain: "whatsnick-a9818.firebaseapp.com",
    projectId: "whatsnick-a9818",
    storageBucket: "whatsnick-a9818.appspot.com",
    messagingSenderId: "576598201755",
    appId: "1:576598201755:web:511d5bc9870c0d37d27d3e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};
