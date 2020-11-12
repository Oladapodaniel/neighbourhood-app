import firebase from 'firebase'
import firestore from 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyDnNf_krjn3MqsEPqvmpm0Niu6TjQAKCpA",
    authDomain: "neighbourhood-app-f42b1.firebaseapp.com",
    databaseURL: "https://neighbourhood-app-f42b1.firebaseio.com",
    projectId: "neighbourhood-app-f42b1",
    storageBucket: "neighbourhood-app-f42b1.appspot.com",
    messagingSenderId: "421783844074",
    appId: "1:421783844074:web:f5ee7e3fce41c2a0351393"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebaseApp.firestore().settings({ timeStampsInSnapShots: true })
  export default firebaseApp.firestore()
