/* Pseudocode
  16 cards.
  On page load, place random
  Click one card.
  Click another card. (Prevent clicking same card (toggle lock class)).
  If cards don't have the same icon, flip them back over.
  Else lock the two cards.
  Increase move counter by 1.
  Check for Winning conditions.
    If all cards are locked, Player Wins.
    Else change star ranking.
      0-8 = 5 stars
      9-16 = 4 stars
      17-19= 3 stars
      20-22= 2 stars
      >22  = 1 stars

*/
function shuffle(array) {
  //Fisher-Yates Shuffle
  let m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

let icons = ["fa-camera", "fa-camera", "fa-atlas","fa-atlas", "fa-cloud", "fa-cloud", "fa-code-branch", "fa-code-branch", "fa-coffee", "fa-coffee", "fa-cookie-bite", "fa-cookie-bite", "fa-dumbbell", "fa-dumbbell", "fa-seedling", "fa-seedling"]

$('.flip-container .card').on('click', function(){
  $(this).toggleClass('flipped');
});
