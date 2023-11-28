import { initializeApp } from 'firebase/app'
import { useEffect, useState, useCallback } from "react";
import { getDatabase, onValue, ref, update } from "firebase/database";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn9dI-uN2fB7TsW8dgxxztu0aDRX2Na2Y",
  authDomain: "bidforgoodapp.firebaseapp.com",
  projectId: "bidforgoodapp",
  storageBucket: "bidforgoodapp.appspot.com",
  messagingSenderId: "923695299501",
  appId: "1:923695299501:web:1f6a8572dbf8eee90dff24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );

  return [updateData, result];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

const provider = new GoogleAuthProvider();
export const FirebaseSignIn = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // // The signed-in user info.
      // const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const FirebaseSignOut = () => signOut(auth);

export const useAuth = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
    });
  }, []);

  return [user];
};
