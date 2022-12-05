const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
let isFlipped = false;
let firstCard;
let secondCard;
let sum = 0;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkIt();
  }
}

function checkIt() {
  cards.forEach((card) => card.removeEventListener("click", flip));
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  sum += 1;
  document.querySelector("[data-score]").textContent = sum;
  cards.forEach((card) => card.addEventListener("click", flip));
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  setTimeout(() => {
    cards.forEach((card) => card.addEventListener("click", flip));
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: shuffle

function shuffle() {
  cards.forEach((card) => {
    let index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
}

window.addEventListener("load", shuffle);
