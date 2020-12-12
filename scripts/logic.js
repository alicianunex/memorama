document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'gohan',
      img: 'images/gohan.jpg',
    },
    {
      name: 'goku',
      img: 'images/goku.jpg',
    },
    {
      name: 'vegeta',
      img: 'images/vegeta.jpg',
    },
    {
      name: 'goten',
      img: 'images/goten.jpeg',
    },
    {
      name: 'krilin',
      img: 'images/krilin.jpeg',
    },
    {
      name: 'trunks',
      img: 'images/trunks.png',
    },
    {
      name: 'gohan',
      img: 'images/gohan.jpg',
    },
    {
      name: 'goku',
      img: 'images/goku.jpg',
    },
    {
      name: 'vegeta',
      img: 'images/vegeta.jpg',
    },
    {
      name: 'goten',
      img: 'images/goten.jpeg',
    },
    {
      name: 'krilin',
      img: 'images/krilin.jpeg',
    },
    {
      name: 'trunks',
      img: 'images/trunks.png',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  var cardsChosen = [];
  var cardsChosenId = [];
  const cardsWon = [];
  const resultDisplay = document.querySelector('#score');

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/back.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/back.jpg');
      cards[optionTwoId].setAttribute('src', 'images/back.jpg');
      alert('Hey! Estás dándole a la misma carta');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg');
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/back.jpg');
      cards[optionTwoId].setAttribute('src', 'images/back.jpg');
      alert('Prueba otra vez');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Enhorabuena! Encontraste todas las parejas';
    }
  }
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
