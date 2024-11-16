let timer = 30;

// function countdown() {
//   //   document.getElementById("countdown").innerHTML = seconds;
//   console.log("📢 [30-SecondCountdown.js:5] Timer:", seconds);
//   if (seconds > 0) {
//     seconds--;
//     setTimeout(countdown, 1000); // Call the function again after 1 second
//   } else {
//     // Countdown finished, you can add your desired action here
//     console.log("Countdown finished!");
//   }
// }

function countdown() {
  // const counter = document.querySelector(".timer span");

  console.log("📢 [30-SecondCountdown.js:5] Timer:", timer);

  // counter.innerHTML = timer;

  const decreaseTimer = () => {
    timer--;
    //   console.log("📢 [script.js:121]", timer);
    setTimeout(countdown, 1000);
  };

  const timedOut = () => {
    console.log("📢 [script.js:122]", "Countdown finished!");
  };

  timer > 0 ? decreaseTimer() : timedOut();
}

countdown();
