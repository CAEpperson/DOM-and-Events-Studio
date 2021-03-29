// Write your JavaScript code here.
function loadFunction() {
    alert("Page is loaded");
  }
function landFunction() {
    var x = document.getElementById("flightStatus");
    if (x.innerHTML === "Space shuttle ready for takeoff") {
      x.innerHTML = "The shuttle has landed";
    } else {
      x.innerHTML = "Space shuttle ready for takeoff";
    }
}
function landWindowFunction() {
    confirm("The shuttle is landing. Landing gear engaged.");
  }
function takeoffWindowFunction() {
    confirm("Confirm that the shuttle is ready for takeoff");
  }
function landFunction() {
    var x = document.getElementById("flightStatus");
    if (x.innerHTML === "Space shuttle ready for takeoff") {
      x.innerHTML = "Shuttle in flight";
    } else {
      x.innerHTML = "Space shuttle ready for takeoff";
    }
}
function abortWindowFunction() {
  confirm("Confirm that you want to abort the mission.");
}
function abortFunction() {
  var x = document.getElementById("flightStatus");
  if (x.innerHTML === "Space shuttle ready for takeoff") {
    x.innerHTML = "Mission aborted";
  } else {
    x.innerHTML = "Space shuttle ready for takeoff";
  }
}
function takeoffColorFunction() {
  document.getElementById("shuttleBackground").style.backgroundColor = "blue";
}
function landColorFunction() {
  document.getElementById("shuttleBackground").style.backgroundColor = "green";
}
var rocket = document.getElementById('rocket');
var moveLink = document.getElementById('left');
var position = 0;

rocket.style.position = 'relative';

moveLink.onclick = function() {
	position += 20;
  rocket.style.left = position + 'px';
}
// Remember to pay attention to page loading!