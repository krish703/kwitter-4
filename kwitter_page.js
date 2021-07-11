//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
