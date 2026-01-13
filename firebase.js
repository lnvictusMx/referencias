// firebase.js (ESM)
// Firebase CDN (modular) — para usar directo en GitHub Pages sin build

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  orderBy,
  getDocs,
  addDoc,
  serverTimestamp,
  updateDoc,
  increment,
  setDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Exportamos los helpers que usa app.js
export {
  initializeApp,
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  orderBy,
  getDocs,
  addDoc,
  serverTimestamp,
  updateDoc,
  increment,
  setDoc,
  deleteDoc,
};

// ✅ Tu config real
export const firebaseConfig = {
  apiKey: "AIzaSyB-VbQssqec06ulxOmP87vRD6QeL1QqydE",
  authDomain: "invictus-store.firebaseapp.com",
  projectId: "invictus-store",
  storageBucket: "invictus-store.firebasestorage.app",
  messagingSenderId: "384301808722",
  appId: "1:384301808722:web:479520fea826c7c01f338b",
};

// Initialize Firebase + Firestore
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
