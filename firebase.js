import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyDSQTkHUwlO4U7KLA5iAlRGrJnsXgCosRs",
  authDomain: "testotp-1be8c.firebaseapp.com",
  projectId: "testotp-1be8c",
  storageBucket: "testotp-1be8c.appspot.com",
  messagingSenderId: "353553043064",
  appId: "1:353553043064:web:263571586807442ad8e78d",
  measurementId: "G-LGK5S9WZ8V",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
