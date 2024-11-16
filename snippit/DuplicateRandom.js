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
const iconsMatch = [...icons, ...icons];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(iconsMatch);

console.log(iconsMatch);
