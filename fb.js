import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBG9m04CaAYmOslePXOL--caer5pqxJgPA",
    authDomain: "react-native-firebase-c082d.firebaseapp.com",
    databaseURL: "https://react-native-firebase-c082d.firebaseio.com",
    projectId: "react-native-firebase-c082d",
    storageBucket: "react-native-firebase-c082d.appspot.com",
    messagingSenderId: "716371679540",
    appId: "1:716371679540:web:caab94499b4e6282a9ad61",
    measurementId: "G-H0Z34KQ7WY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();