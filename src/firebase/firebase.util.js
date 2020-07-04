import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCQeXksZXMaNLWnVvur0lKYuqd8RgsDLCg",
    authDomain: "ethnicwear-af4a5.firebaseapp.com",
    databaseURL: "https://ethnicwear-af4a5.firebaseio.com",
    projectId: "ethnicwear-af4a5",
    storageBucket: "ethnicwear-af4a5.appspot.com",
    messagingSenderId: "752929089021",
    appId: "1:752929089021:web:935595af20abab05416594",
    measurementId: "G-LFDFBSB9D4"
  };

  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
  export default firebase;