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

  export const createUserProfile=async(user,additionalData)=>{
    if(user===null)
    return;
    const userRef= firestore.doc(`users/${user.uid}`);
    const snapshot= await userRef.get();
    if(!snapshot.exists){
      const {displayName,email}=user;
      const createdAt= new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log("error signing in user : "+error.message)
      }
      
    }
    return userRef;
  };



  export default firebase;