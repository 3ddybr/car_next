import firebase from 'firebase/app';

// import 'firebase/auth';  se eu for usar o autenticação
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_REACT_APP_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket:  process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
export const database = firebase.database();