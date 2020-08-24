import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCajVBfzqIwQxeQgW81BmemIG3cbySh5m8",
  authDomain: "clone-df2fa.firebaseapp.com",
  databaseURL: "https://clone-df2fa.firebaseio.com",
  projectId: "clone-df2fa",
  storageBucket: "clone-df2fa.appspot.com",
  messagingSenderId: "531166687368",
  appId: "1:531166687368:web:30ec52772e873f23f7ef3d",
  measurementId: "G-33BRSY90KC"
});


const auth = firebase.auth();

export { auth };