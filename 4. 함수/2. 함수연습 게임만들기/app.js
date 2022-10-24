const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// Arrow function 과 삼항연산자
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) || (cChoice === PAPER && pChoice === SCISSORS) || (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = ture;
  console.log('Game is starting');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;
  if (playerChoice) {
    const winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you`;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won';
  } else {
    message = message + 'lost';
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game

// Rest 연산자

// 콜백함수
const combine = (resultHandler, operation, ...numbers) => {
  //함수 안에 함수
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
    resultHandler(sum);
  }
};
// function 키워드를 쓸때만 사용 가능한 arguments는 배열과 비슷한 객체를 제공, 실제 배열은 아님
// ES6에 Rest 연산자가 도입되기 이전에 사용, 현재는 Rest 연산자를 쓰자
// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   resultHandler(sum, 'The result after adding all numbers is');
// };

const showResult = result => {
  alert('The result after adding all number is : ' + result);
};

combine(showResult.bind(this, 'The result after adding all numbers is :'), 'ADD', 1, 10, -15, 20);
combine(showResult.bind(this, 'The result after subtracting all numbers is :'), 'SUBTRACT', 10, 20, 15, -16, -20);
