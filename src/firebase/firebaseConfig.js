// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getMessaging } from "firebase/messaging"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBxYbr81yipqqXsifK6H1HLmzaLnwZQoWE",
  projectId: "my-new-project-a465f",
  messagingSenderId: "208334495737",
  appId: "1:208334495737:web:c7a353404edf300b7a2728",
  authDomain: "my-new-project-a465f.firebaseapp.com",
  storageBucket: "my-new-project-a465f.firebasestorage.app",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const messaging = getMessaging(app)
