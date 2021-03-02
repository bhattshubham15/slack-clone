import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB067vL-X-0gil39pbECwykJ7olcTX5eO4",
    authDomain: "slack-clone-be1da.firebaseapp.com",
    projectId: "slack-clone-be1da",
    storageBucket: "slack-clone-be1da.appspot.com",
    messagingSenderId: "148233759178",
    appId: "1:148233759178:web:cf77d35706ee2279590733"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }
