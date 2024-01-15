function shuffleArray(array) {
  let current = array.length, tmp, rdm;

  while (0 !== current) {

      rdm = Math.floor(Math.random() * current);
      current -= 1;

      tmp = array[current];
      array[current] = array[rdm];
      array[rdm] = tmp;
  }

  return array;
}

let cards = document.querySelectorAll('.card');
let reverseCard = 0;
let card1, card2;

let numbers = Array.from({ length: cards.length }, (_, index) => Math.floor(index / 2) + 1);
let shuffledNumbers = shuffleArray(numbers);

for (let i = 0; i < cards.length; i++) {
  cards[i].textContent = shuffledNumbers[i];

  cards[i].addEventListener('click', function() {
      let card = cards[i];

      if (card === card1) {
          return;
      }

      card.classList.add('clicked');
      reverseCard++;

      if (reverseCard === 1) {
          card1 = card;
      } else if (reverseCard === 2) {
          card2 = card;
          if (card1.textContent === card2.textContent) {
              resetCards();
              checkWin();
          } else {
              card1.classList.remove('clicked');
              card2.classList.remove('clicked');
              resetCards();
          }
      }
  });
}

function resetCards() {
  reverseCard = 0;
  card1 = null;
  card2 = null;
}

function checkWin() {
  let allCard = document.querySelectorAll('.clicked').length === cards.length;
  if (allCard) {
      alert('you win!');
  }
}