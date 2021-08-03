import firebase from "firebase";



const firebaseApp=firebase.initializeApp({



    apiKey: "AIzaSyA8yMIADH8ww6iLZwjXkuKKQY7TPJAO6xs",
    authDomain: "facebook-messanger-clone-16fe0.firebaseapp.com",
    projectId: "facebook-messanger-clone-16fe0",
    storageBucket: "facebook-messanger-clone-16fe0.appspot.com",
    messagingSenderId: "30783628164",
    appId: "1:30783628164:web:2507e9a1ba7608d6de73d1",
    measurementId: "G-ZRQL79LP0Z"
 
})

  const db=firebaseApp.firestore();
  export default db;