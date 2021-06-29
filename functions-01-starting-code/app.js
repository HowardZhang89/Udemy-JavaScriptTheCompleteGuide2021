const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';
let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if(selection !== ROCK &&
     selection !== PAPER &&
     selection !== SCISSORS
  ) {
    alert('Invalid choice! We chose Rock for you!');
    return DEFAULT_USER_CHOICE;
  }
  return selection;
}

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67){
    return PAPER;
  } else {
    return SCISSORS;
  }
};


const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  // Ternary Expression version:
  cChoice === pChoice
  ? RESULT_DRAW
  : cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK
  ? RESULT_PLAYER_WINS
  : RESULT_COMPUTER_WINS;

  // if (cChoice === pChoice){
  //   return RESULT_DRAW;
  // } else if (
  //   cChoice === ROCK && pChoice === PAPER ||
  //   cChoice === PAPER && pChoice === SCISSORS ||
  //   cChoice === SCISSORS && pChoice === ROCK
  //   ) {
  //     return RESULT_PLAYER_WINS;
  //   } else {
  //     return RESULT_COMPUTER_WINS;
  //   }
}
startGameBtn.addEventListener('click', () => {
  if(gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if(playerChoice){
    winner = getWinner(computerChoice, playerChoice);
  }else{
    winner = getWinner(computerChoice);
  }
  let message =  `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, you ` // if playerChoice is falsy, Default is assigned
  if ( winner === RESULT_DRAW) {
    message =  message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  console.log(message);
});

// Not related to game, learning Rest parameters (aka. take the rest of the parameters and concat into Arry)
const combine = (resultHandler, operation, ...numbers) => {  // rest parameter
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }

  let sum = 0;
  for (const num of numbers){
    if (operation === 'SUM') {
      sum += validateNumber(num);
    }else {
      sum -= validateNumber(num);
    }
    
  }
  resultHandler(sum);
};

// const subtractUp = function(){
//   let sum = 0;
//   for (const num of arguments){ // don't use this, use the Rest Parameter
//     sum += num;
//   }
//   return sum;
// };

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
}

combine(showResult.bind(this, 'The result after adding all numbs is:'), 'ADD', 1,5,'fdsa',-3,6,10);
conbine(showResult.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT',)
console.log(sumUp(showResult, 1,5,10,-3, 6, 10));
console.log(sumUp(showResult, 1,5,10,-3,6,19,25,88));
console.log(subtractUp(-4,5,2,5,12,80));