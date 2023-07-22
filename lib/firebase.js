import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyATs3WGdjh_WmvEdiSZfqff6pQppinuQ2k",
    authDomain: "nextjs-firebase-test-d1cd0.firebaseapp.com",
    projectId: "nextjs-firebase-test-d1cd0",
    storageBucket: "nextjs-firebase-test-d1cd0.appspot.com",
    messagingSenderId: "482945175112",
    appId: "1:482945175112:web:9210b770a058f099c5527d",
    measurementId: "G-PY570MT9R5"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();