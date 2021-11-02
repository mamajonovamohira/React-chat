import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp({
  apiKey: "AIzaSyBxH6ig8sZXUFhTUYGe1AC1u6ImDmiZuBU",
  authDomain: "chat-react-7e0ac.firebaseapp.com",
  projectId: "chat-react-7e0ac",
  storageBucket: "chat-react-7e0ac.appspot.com",
  messagingSenderId: "88025450261",
  appId: "1:88025450261:web:79fec4bce1708baf260b1c",
  measurementId: "G-WXYGTKHNDT"
}
);

const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

