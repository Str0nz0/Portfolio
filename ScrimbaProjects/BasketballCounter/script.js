let homeCounter = 0;
let guestCounter = 0;

/////////////////////////////////////////////////////////////////////

function updateHome() {
  document.querySelector("#home-counter").textContent = homeCounter;
}

function updateGuest() {
  document.querySelector("#guest-counter").textContent = guestCounter;
}

function newGame() {
  homeCounter = 0;
  updateHome();
  guestCounter = 0;
  updateGuest();
}

/////////////////////////////////////////////////////////////////////

function homeAddOne() {
  homeCounter++;
  updateHome();
}

function homeAddTwo() {
  homeCounter += 2;
  updateHome();
}

function homeAddThree() {
  homeCounter += 3;
  updateHome();
}

/////////////////////////////////////////////////////////////////////

function guestAddOne() {
  guestCounter++;
  updateGuest();
}

function guestAddTwo() {
  guestCounter += 2;
  updateGuest();
}

function guestAddThree() {
  guestCounter += 3;
  updateGuest();
}
