import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDuhXLLd3FtHjYNbzSL0mCvGe58DRQcTFw",
  authDomain: "fir-testing-7c976.firebaseapp.com",
  databaseURL: "https://fir-testing-7c976.firebaseio.com",
  projectId: "fir-testing-7c976",
  storageBucket: "fir-testing-7c976.appspot.com",
  messagingSenderId: "38481730882"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 