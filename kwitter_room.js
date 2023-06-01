var firebaseConfig = {
      apiKey: "AIzaSyAphbayp4MaS_C1_SM9As1gnNd-K7vq6-Q",
      authDomain: "kwitter1-bc791.firebaseapp.com",
      databaseURL: "https://kwitter1-bc791-default-rtdb.firebaseio.com",
      projectId: "kwitter1-bc791",
      storageBucket: "kwitter1-bc791.appspot.com",
      messagingSenderId: "888381991704",
      appId: "1:888381991704:web:69d6f9dd2f541c93564c6d",
      measurementId: "G-4CHQD707KY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}