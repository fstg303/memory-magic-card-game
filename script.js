const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disableDesk = false;

function flipCard(e) {
  let clickedCard = e.target;

  // OnClick event turn card
  clickedCard.classList.add("flip");

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
  // Check if two cars matches
  if (icon1 === icon2) {
    // matchedCards++;

    // if (matchedCards == 8) {
    //   setTimeout(() => {
    //     return shuffleCard();
    //   }, 1000);
    // }

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
  }, 1200);
}

function shuffleCard() {
  let matchedCards = 0;
  let matchArr = [];
  cardOne = cardTwo = "";

  //   let arr = [1, 2, 3, 4, 5, 6, 7, 8];

  //   console.log("📢 [script.js:68]", matchArr);

  //   matchArr.sort(() => (Math.random() > 0.5 ? 1 : -1));

  const randomIndex = Math.floor(Math.random() * matchArr.length);

  cards.forEach((card) => {
    // Remove all add classs
    card.classList.remove("flip");

    let iconTag = card.querySelector(".back-view i");

    matchArr.push(iconTag.className);

    iconTag.className = `${matchArr[randomIndex]}`;

    // console.log("📢 [script.js:79]", iconTag.className, matchArr);

    card.addEventListener("click", flipCard);
  });
}

cards.forEach((card) => {
  // adding click event to all cards
  //   card.classList.add("flip");
  card.addEventListener("click", flipCard);
});

// shuffleCard();
