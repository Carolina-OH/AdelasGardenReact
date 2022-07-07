import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA9YONzyYPSfKBXDo7zrHmjn1C4HP03kME",
  authDomain: "coderhouse-ecommerce-adelas.firebaseapp.com",
  projectId: "coderhouse-ecommerce-adelas",
  storageBucket: "coderhouse-ecommerce-adelas.appspot.com",
  messagingSenderId: "708407060673",
  appId: "1:708407060673:web:751a2a5ba6206cb250cc40"
};
const app = initializeApp(firebaseConfig); 
export const db= getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
