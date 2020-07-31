import firebase from 'firebase';

const config= {
    apiKey: "AIzaSyBuqhncfE6V2VKTNiqXSugsj2D7OsPvQ6E",
    authDomain: "fir-tutorial-7905a.firebaseapp.com",
    databaseURL: "https://fir-tutorial-7905a.firebaseio.com",
    projectId: "fir-tutorial-7905a",
    storageBucket: "fir-tutorial-7905a.appspot.com",
    messagingSenderId: "499537447246",
    appId: "1:499537447246:web:579792730148e1750bb61f",
    measurementId: "G-9FYF6CBSX1"
};

const fire= firebase.initializeApp(config);
export default fire;