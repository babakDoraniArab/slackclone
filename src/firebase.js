import firebase from "./firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCQzyb83miEiz5hu_-E-pqeheX-GFyh5dk",
  authDomain: "slackclone-74499.firebaseapp.com",
  projectId: "slackclone-74499",
  storageBucket: "slackclone-74499.appspot.com",
  messagingSenderId: "790774806027",
  appId: "1:790774806027:web:e02176675ae75a1995790e",
};
firebase.initializeApp(config);

export default firebase;
