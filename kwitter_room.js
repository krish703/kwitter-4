
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAlpY7kJ0ew6Sei_e6Wt0TzH3wodx9sUMs",
      authDomain: "my-kwitter-app-a4f7a.firebaseapp.com",
      projectId: "my-kwitter-app-a4f7a",
      storageBucket: "my-kwitter-app-a4f7a.appspot.com",
      messagingSenderId: "88121532516",
      appId: "1:88121532516:web:83349c092350c49b2d3f71"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname- "+ Room_names);
var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;

 //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location=index.html;
}



