import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyCmfJFhsb_n68u27juhnl0RxLkZTi2je6c",
authDomain: "todoplus-8250b.firebaseapp.com",
projectId: "todoplus-8250b",
storageBucket: "todoplus-8250b.appspot.com",
messagingSenderId: "530189635760",
appId: "1:530189635760:web:e46f07d9b1edb0162d2b75",
measurementId: "G-RXJLZYVZ0X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.firestore().settings({timestampsInSnapshot: true});

export default firebase;