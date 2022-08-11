
// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyChXEeuJpuuYKHbgXJ2B9q7nfjdsFAVw-A",
  authDomain: "food-ordering-app-97daf.firebaseapp.com",
  databaseURL: "https://food-ordering-app-97daf-default-rtdb.firebaseio.com",
  projectId: "food-ordering-app-97daf",
  storageBucket: "food-ordering-app-97daf.appspot.com",
  messagingSenderId: "877530121537",
  appId: "1:877530121537:web:dfa4046b17b1af15724dc0",
  measurementId: "G-WZLG6556KT"
};

// Initialize Firebase
firebase.initializeApp(Config);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


