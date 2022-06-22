import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2faTiiRDMYzafThPkX6Nw29ANDSSBw3A",
    authDomain: "sellcar-65551.firebaseapp.com",
    projectId: "sellcar-65551",
    storageBucket: "sellcar-65551.appspot.com",
    messagingSenderId: "708059810331",
    appId: "1:708059810331:web:ae20d59a85126055d3c6be",
    measurementId: "G-Z2BFPN55YN"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}