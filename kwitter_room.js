
const firebaseConfig = {
  apiKey: "AIzaSyBBmNAcnQ5l1-jeXxzeCXmT8Aszn8jy8Bg",
  authDomain: "kwitter-87960.firebaseapp.com",
  databaseURL: "https://kwitter-87960-default-rtdb.firebaseio.com",
  projectId: "kwitter-87960",
  storageBucket: "kwitter-87960.appspot.com",
  messagingSenderId: "695382549465",
  appId: "1:695382549465:web:3faa14993832b770502fc8",
  measurementId: "G-Z8YSY7F5NK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding Room Name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names - " + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}