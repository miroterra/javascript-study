// // 배열을 만드는 가장 기초 []
// const numbers = [1, 2, 3];
// console.log(numbers);

// // new Array에 단일 숫자를 넣으면 만들어질 배열에 대한 길이로 표시
// const moreNumbers = new Array(5);
// console.log(moreNumbers);

// // 전역에서 사용 가능한 배열 객체에 대한 특별한 메서드
// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// // 유사 배열 객체
// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// // 이터러블이나 유사 배열 객체가 들어간다. 다수의 인수가 들어가면 안된다.
// const moreNumbers2 = Array.from('Hi!');
// console.log(moreNumbers2);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', { moreDetail: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// 배열의 전체를 이동하는 shift/unshift 보다 push/pop이 빠르다.
const hobbies = ['Sports', 'Cooking'];

// 배열의 마지막부분에 추가
hobbies.push('Reading');

// 배열의 첫 부분에 추가 -> 배열의 모든 요소를 오른쪽으로 이동
hobbies.unshift('Coding');

// 배열의 마지막 요소 삭제하고 삭제된 요소를 스트링으로 반환
const poppedValue = hobbies.pop();

//배열의 첫번째 부분 삭제 -> 이는 배열의 모든 요소를 왼쪽으로 한자리 이동한다. 따라서 첫번째 부분은 삭제가 되는 것
hobbies.shift();

console.log(hobbies);
