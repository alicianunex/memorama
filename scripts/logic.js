document.addEventListener('DOMContentLoaded', () => {
  // Cree una variable para guardar numero de intentos
  let tries = 0;
  // Cree una constante para maximo numero de intentos
  const maxTries = 10;
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
    if (tries > maxTries) {
      // Si no puede jugar retorna una alerta de gameover y para la ejecucion de la funcion checkForMatch
      return alert('Game Over');
    }

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
      alert('Prueba otra vez');
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
