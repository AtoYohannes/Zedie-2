import * as firebase from "firebase";
// import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyBXtYx4_gz3n7-55jFnNYGs_fG6U0AgXsA",
  authDomain: "zedie-4353b.firebaseapp.com",
  databaseURL: "https://zedie-4353b.firebaseio.com",
  projectId: "zedie-4353b",
  storageBucket: "zedie-4353b.appspot.com",
  messagingSenderId: "398919240211",
  appId: "1:398919240211:web:523d6a3fe2b20426684de6",
  measurementId: "G-09KHCG6P6E",
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
const storage = firebase.storage()

export  {
  storage, firebase as default
}





// export default firebase;
