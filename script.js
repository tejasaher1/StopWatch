//Getting all the elements ID's.
let showTimer = document.getElementById("timePosition");
let start = document.getElementById("startBtn");
let stop = document.getElementById("stopBtn");
let reset = document.getElementById("restartBtn");

let displayHour = document.getElementById("hour");
let displayMin = document.getElementById("minute");
let displaySec = document.getElementById("second");
let displayMinSec = document.getElementById("miliSec");

let addAnimationClass = document.querySelectorAll(".changeAnimation");

let count = 0;
let timer;
let isRunning = false;

// Define the variables -
let hr = 0;
let min = 0;
let sec = 0;
let miliSec = 0;

// Different Approch using new Date() -
// function updateDisplay() {
//   var timeString = new Date(count * 1000).toISOString().slice(11, 19);
//   // showTimer.innerHTML = timeString;

//   showTimer.innerHTML = `

//         <h1 id="hr"> ${timeString.slice(0,2)} </h1>
//         <span> ${timeString.slice(2,3)} </span>
//         <h1 id="min"> ${timeString.slice(3,5)} </h1>
//         <span> ${timeString.slice(5,6)} </span>
//         <h1 id="sec"> ${timeString.slice(6,8)} </h1>
//   `
// }

// Here we define a function to check the status of the milliseconds, seconds, minutes and hours.
// If milliseconds is less than 100 then on the bases of condition the changes will be done.
function updateDisplay() {
  miliSec++;
  if (miliSec < 100) {
    if (miliSec < 10) {
      // If miliSec is greater than 10, then add 0 at start.
      displayMinSec.innerHTML = "0" + miliSec;
    } else {
      displayMinSec.innerHTML = miliSec;
    }
  } else {
    miliSec = 0;
    sec++;
    if (sec < 60) {
      if (sec < 10) {
        displaySec.innerHTML = "0" + sec;
      } else {
        displaySec.innerHTML = sec;
      }
    } else {
      sec = 0;
      min++;
      if (min < 60) {
        if (min < 10) {
          displayMin.innerHTML = "0" + min;
        } else {
          displayMin.innerHTML = min;
        }
      } else {
        min = 0;
        hr++;
        if (hr < 24) {
          displayHour.innerHTML = "0" + hr;
        } else {
          displayHour.innerHTML = hr;
        }
      }
    }
  }
}

// Adding event listeners to start button. When the button is clicked then firt check isRunning is true or false.
// After that adding setInterval and calling updateDisplay function at every 10 miliseconds.
start.addEventListener("click", function () {
  console.log(addAnimationClass[0]);
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      count++;
      updateDisplay();
    }, 10);
  }
});

// Adding event listeners to stop button, When the button is clicked then clear the Interval by passing the timer variable.
stop.addEventListener("click", function () {
  isRunning = false;
  clearInterval(timer);
});

// Adding event listeners to reset button, When the button is clicked then reset the variable of hr, min, sec and milisec to 0.
// And set innerHTMl of displayHour, displayMin, displaySec, displayMinSec as 00.
reset.addEventListener("click", function (e) {
  isRunning = false;
  clearInterval(timer);
  hr = 0;
  min = 0;
  sec = 0;
  miliSec = 0;

  displayHour.innerHTML = "0" + hr;
  displayMin.innerHTML = "0" + min;
  displaySec.innerHTML = "0" + sec;
  displayMinSec.innerHTML = "0" + miliSec;
});

// Initialize display
// updateDisplay();
