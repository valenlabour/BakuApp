
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD5mjgvKGkZRpJqL5w02aZS1a63tBL9EhM",
  authDomain: "baku-app-c24fd.firebaseapp.com",
  projectId: "baku-app-c24fd",
  storageBucket: "baku-app-c24fd.appspot.com",
  messagingSenderId: "51082965396",
  appId: "1:51082965396:web:2a701791b53cfea6c81f81"
};

const app = initializeApp(firebaseConfig);
export const baseDatos = getFirestore(app);
export const coleccionProductos = collection(baseDatos, 'productos');