import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0iqCRsAkRQDbhthTBp_EHRgVNYsDKzQo",
  authDomain: "ecommerce88020.firebaseapp.com",
  projectId: "ecommerce88020",
  storageBucket: "ecommerce88020.firebasestorage.app",
  messagingSenderId: "902774823130",
  appId: "1:902774823130:web:335bb906de7e3b88a7ade3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
