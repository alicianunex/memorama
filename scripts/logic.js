document.addEventListener('DOMContentLoaded', () => {
  // Cree una variable para guardar numero de intentos
  let tries = 0;
  // Cree una constante para maximo numero de intentos
  const maxTries = 4;
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
      img: 'images/goten.jpg',
    },
    {
      name: 'krilin',
      img: 'images/krilin.jpg',
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
      img: 'images/goten.jpg',
    },
    {
      name: 'krilin',
      img: 'images/krilin.jpg',
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
  const errorCount = document.querySelector('#errorCount');

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
    // Antes de chequear por match chequeo si el jugador puede jugar
    //alert(tries);

    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/back.jpg');
      cards[optionTwoId].setAttribute('src', 'images/back.jpg');
      alert, swal('Hey! Estás dándole a la misma carta');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg');
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/back.jpg');
      cards[optionTwoId].setAttribute('src', 'images/back.jpg');
      tries = tries + 1;
      errorCount.textContent = tries;
      console.log({ tries });
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Enhorabuena! Encontraste todas las parejas';
    }
  }
  function flipCard() {
    if (tries > maxTries) {
      return alert('Game Over');
    }
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
