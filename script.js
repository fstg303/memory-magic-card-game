const cards = document.querySelectorAll(".card");

let matchedCards = 0;
let cardOne, cardTwo;
let disableDesk = false;
const icons = [
  "iconoir-birthday-cake",
  "iconoir-boxing-glove",
  "iconoir-football-ball",
  "iconoir-spiral",
  "iconoir-cycling",
  "iconoir-leaderboard-star",
  "iconoir-sea-and-sun",
  "iconoir-wolf",
];
const iconPar = [...icons, ...icons];

let matchArr = [];

let timer = 60;

const btnRefresh = document.querySelector(".btn-refresh");

function flipCard(e) {
  let clickedCard = e.target;

  if (clickedCard !== cardOne && !disableDesk) {
    clickedCard.classList.add("flip");

    if (!cardOne) return (cardOne = clickedCard);

    cardTwo = clickedCard;

    disableDesk = true;

    // Assince variables
    let cardOneIcon = cardOne.querySelector(".back-view i").classList[0],
      cardTwoIcon = cardTwo.querySelector(".back-view i").classList[0];

    matchCards(cardOneIcon, cardTwoIcon);
  }
}

function matchCards(icon1, icon2) {
  let flipCardsDisplay = document.querySelector(".flipCards span");
  // Check if two cars matches
  if (icon1 === icon2) {
    matchedCards++;

    flipCardsDisplay.textContent = matchedCards;

    // Restart the game
    if (matchedCards == 8) {
      // Add notication user won!
      AlertDisplay("🎉🎊🥳Congraulation you WIN!🥳🎊🎉");

      // Auto refresh game within a give time
      // setTimeout(() => {
      //   flipCardsDisplay.textContent = 0;
      //   return shuffleCard();
      // }, 3000);
    }

    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return (disableDesk = false);
  }

  // if two card not matched
  setTimeout(() => {
    // adding shake class to both card after 400ms
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    // removing both shake & flip classes from both cards after 1.2 seconds
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDesk = false;
  }, 800);
}

function AlertDisplay(text) {
  let flipCardsDisplay = document.querySelector(".flipCards span");
  let alertWarp = document.querySelector(".alert-wrapper");
  let alertDisplay = document.querySelector(".alert");

  alertWarp.classList.remove("hidden");
  alertWarp.classList.add("show");

  alertDisplay.textContent = text;

  // Automatical remove alert after a give time
  // setTimeout(() => {
  //   alertWarp.classList.remove("show");
  //   alertWarp.classList.add("hidden");
  //   flipCardsDisplay.textContent = 0;
  // }, 900);
}

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
  for (let index = 0; index < array.length; index++) {
    const generateRandomIndex = Math.floor(Math.random() * (index + 1));

    [array[index], array[generateRandomIndex]] = [
      array[generateRandomIndex],
      array[index],
    ];
  }
}

function shuffleCard() {
  cardOne = cardTwo = "";

  // Shuffle Icons
  shuffleArray(iconPar);

  // Start Countdown
  countdown();

  cards.forEach((card, i) => {
    // Remove all add classs
    card.classList.remove("flip");

    let iconTag = card.querySelector(".back-view i");

    iconTag.className = `${iconPar[i]}`;
  });
}

// Countdown
function countdown() {
  const counter = document.querySelector(".timer span");

  counter.innerHTML = `${timer}s`;

  const decreaseTimer = () => {
    timer--;
    setTimeout(countdown, 1000);
  };

  const timedOut = () => {
    // Remove the click event on all cards

    cards.forEach((card) => {
      card.removeEventListener("click", flipCard);
    });

    AlertDisplay("😢Sorry Time's Up");

    return (disableDesk = true);
  };

  // Stop timer when all cards are match
  if (matchedCards !== 8) {
    timer > 0 ? decreaseTimer() : timedOut();
    return;
  }
}

cards.forEach((card) => {
  // adding click event to all cards

  card.addEventListener("click", flipCard);
});

// Restart game on click event

btnRefresh.addEventListener("click", () => {
  location.reload();
});

// Randomize icons
shuffleCard();
