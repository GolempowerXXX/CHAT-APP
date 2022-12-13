//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDHnyvf6xL67jCSN3e70pkqSb-LMDSu3JM",
    authDomain: "kwitter-104b9.firebaseapp.com",
    databaseURL: "https://kwitter-104b9-default-rtdb.firebaseio.com",
    projectId: "kwitter-104b9",
    storageBucket: "kwitter-104b9.appspot.com",
    messagingSenderId: "8629486399",
    appId: "1:8629486399:web:66c9f0a2e74a4c488c498a"
  };

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
roomname = localStorage.getItem("room_name");
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name:username, 
          message:msg,
          like:0

          
       
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
