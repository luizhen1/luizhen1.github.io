import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importante para o banco

const firebaseConfig = {
  apiKey: "AIzaSyC4w1UhXCC20uFPPmWoTxGSWqvGuEl2xTM",
  authDomain: "agendamento-viagens-extensao.firebaseapp.com",
  projectId: "agendamento-viagens-extensao",
  storageBucket: "agendamento-viagens-extensao.firebasestorage.app",
  messagingSenderId: "370928703496",
  appId: "1:370928703496:web:1840b8e7a46e8bba6d59bd"
};

// Inicializa o Firebase e o Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);