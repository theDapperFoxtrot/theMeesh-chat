import React from 'react';
import './App.css';
import './components/SignIn'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBa9snMIli8yFIwpEhbrS4w6WGynArGD2A",
  authDomain: "the-meesh-project.firebaseapp.com",
  databaseURL: "https://the-meesh-project-default-rtdb.firebaseio.com",
  projectId: "the-meesh-project",
  storageBucket: "the-meesh-project.appspot.com",
  messagingSenderId: "361846303682",
  appId: "1:361846303682:web:cbb090174c16b2869a445b",
  measurementId: "G-BCHZH3ZCC3"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header className="App-header">
      
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;


// Create styled button/clickable popup
// Prompt user to sign in with Google account
// Join chatroom that allows limited character messages (ban bad words)
// Create ban list for users who trigger bad word filter
// utilize useCollectionData hook to update chat messages when data is added to Firestore database