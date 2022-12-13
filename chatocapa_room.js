
//ADD YOUR FIREBASE LINKS HERE
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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Hey there, " + user_name + "!";

function add_room(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "addingroomname"
  });localStorage.setItem("room_name", room_name);
  window.location = "chatocapa_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("room_name" + Room_names);
row = "<div class= 'room_name' id="+Room_names+"onclick = 'redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;

  //End code
  });});}
getData();

function redirecttoroomname(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "index.html;"

}
function logout(){
  window.location = "index.html";
  user_name = "";
}