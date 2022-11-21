import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDX6tVNCoWliyxOW59KvZKsYGlieu_8gkA",
  authDomain: "react-port-4a409.firebaseapp.com",
  projectId: "react-port-4a409",
  storageBucket: "react-port-4a409.appspot.com",
  messagingSenderId: "785988403037",
  appId: "1:785988403037:web:2ba77f77c42a30c100b2b4",
  measurementId: "G-KGXGQM0MC6"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export{
  storage, firebase as default
}