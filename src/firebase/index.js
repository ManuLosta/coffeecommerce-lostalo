import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: 'AIzaSyCtg2J5h2tXohXLeaTnEfa5ULdDgtPTa0E',
  authDomain: 'coffeecommerce-42fdc.firebaseapp.com',
  projectId: 'coffeecommerce-42fdc',
  storageBucket: 'coffeecommerce-42fdc.appspot.com',
  messagingSenderId: '851661048037',
  appId: '1:851661048037:web:7e311710c0e9005bc06c0c',
});

export const db = getFirestore(app);
