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
  //Fisher-Yates Shuffle from https://bost.ocks.org/mike/shuffle/
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
function flipElements(element1, element2){
  window.setTimeout(function(){
    element1.toggleClass('flipped');
    element2.toggleClass('flipped');
  },2000);
  //element1.toggleClass('flipped');
  //element2.toggleClass('flipped');
}
function updateScoreInterface(moves){
  $('#numOfMoves').text(moves);
  console.log(moves);
  console.log($('#stars').children('.fas:last-child'));
  if (moves <= 8) {} else
  if (moves <= 16) { $('#stars').children('.fas').eq(3).toggleClass("fas far");} else
  if (moves <= 19) { $('#stars').children('.fas').eq(2).toggleClass("fas far");} else
  if (moves <= 22) { $('#stars').children('.fas').eq(1).toggleClass("fas far");} else
  {$('#stars').children('.fas').eq(0).toggleClass("fas far");};
};
/* --------------------- Code Start ------------------------------------------*/
/* -- Initialization -- */
//Initialize the icons selected.  Need two of each chosen icons, 16 total. https://fontawesome.com/cheatsheet
let icons = ["fa-camera", "fa-camera", "fa-atlas","fa-atlas", "fa-cloud", "fa-cloud", "fa-code-branch", "fa-code-branch", "fa-coffee", "fa-coffee", "fa-cookie-bite", "fa-cookie-bite", "fa-dumbbell", "fa-dumbbell", "fa-seedling", "fa-seedling"]
icons = shuffle(icons);
for (let i=0; i<16; i++){
  const iconDOMSelector = `#card_${i+1} .icon`;
  // Toggle the randomized icons onto the backs of the cards.
  $(iconDOMSelector).toggleClass(icons[i]);
};

/* -- Game Logic Start -- */
let activeCardsCounter=0;
let otherActiveCard;
let moveCounter = 0;
$('.flip-container .card').on('click', function(){
  // Display Back of the card if not already flipped
  // Boolean test // console.log($(this).hasClass('flipped') == false);
  if ($(this).hasClass('flipped') == false) {
    $(this).toggleClass('flipped');
    activeCardsCounter++;
    if (activeCardsCounter === 2){
      moveCounter++;
      updateScoreInterface(moveCounter);
      if ($(this).find("i.icon").attr("class") === otherActiveCard.find("i.icon").attr("class")){
        //console.log("You found a match");
      } else {
        flipElements($(this), otherActiveCard);
      };
      activeCardsCounter=0;
    };
    otherActiveCard = $(this);
  };
});
