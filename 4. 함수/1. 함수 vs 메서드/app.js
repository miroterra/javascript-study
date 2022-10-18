const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
}

// const person = {
//   // name이 프로퍼티
//   name: 'Max',

//   // 객체에 함수가 저장된 것을 메서드 라고 부른다
//   greet: function greet() {
//     console.log('Hello there');
//   },
// };

// person.greet();

// 함수는 객체이다
console.dir(startGame);

// 즉 addEventListener는 startGameBtn 객체의 메서드다
startGameBtn.addEventListener('click', startGame);
