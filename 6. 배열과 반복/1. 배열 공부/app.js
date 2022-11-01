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
// const hobbies = ['Sports', 'Cooking'];

// // 배열의 마지막부분에 추가
// hobbies.push('Reading');

// // 배열의 첫 부분에 추가 -> 배열의 모든 요소를 오른쪽으로 이동
// hobbies.unshift('Coding');

// // 배열의 마지막 요소 삭제하고 삭제된 요소를 스트링으로 반환
// const poppedValue = hobbies.pop();

// //배열의 첫번째 부분 삭제 -> 이는 배열의 모든 요소를 왼쪽으로 한자리 이동한다. 따라서 첫번째 부분은 삭제가 되는 것
// hobbies.shift();

// console.log(hobbies);

// // 두 요소 사이에 요소를 추가하는 것, 삭제한 것을 반환한다.
// // 첫번째 인자는 들어갈 인덱스 번호, 음수로 입력하면 오른쪽에서 부터 시작한다.
// // 두번째 인자는 제거할 요소의 수
// // 세번째 인자는 배열에 추가할 요소
// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElement = hobbies.splice(-2, 1);
// console.log(hobbies);

// 배열은 참조값이다
// slice는 원본을 대체하지않고 배열에 복사본을 반환한다.
// const testResults = [1, 5.3, 1.5, 10.55, -1, 10];

// // 첫번째 인자는 시작하는 부분 , 두번째 인자는 끝부분인데 포함되지않음 따라서 인덱스 0,1 이 복사가 된다.
// // 단일 인자로 단일 인덱스를 가져올수도 있다.
// // const storedResults = testResults.slice(0, 2);

// // concat은 배열을 취하여 이 배열을 서로 연결한다. 중첩배열로 추가하는 것은 아님
// // 배열의 모든 요소를 기본 배열에 새로운 요소로 추가하여 새로운 배열을 반환한다.
// const storedResults = testResults.concat([3.77, 2]);

// testResults.push(4);

// console.log(storedResults, testResults);

// // 원시값에 관해서 실행되지만 참조 값에 대해서는 실행되지않는다 -> -1을 반환한다.
// // 배열의 해당 요소의 인덱스를 찾을 수 있는 indexOf, 중복 값이 있어도 첫번째로 나오는 값만 나온다.
// console.log(testResults.indexOf(1.5));
// // 배열의 끝에서 부터 찾기
// console.log(testResults.lastindexOf(1.5));

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Manuel' }));

// // 원시 값에 관해 사용하며  includes 는 true와 false를 반환
// console.log(testResults.includes(10.99));

// // 다른 함수를 취하는 find, 찾은 값을 복사하는것이 아니므로 값을 수정하면 전체가 바뀐다.
// // 함수는 최대 3개의 인수를 취한다.
// // 첫번째는 인자는 배열의 단일 객체, 두번째 인수는 해당 단일 요소의 인덱스, 세번째 인수는 전체 배열
// // 찾으려는 요소에 관해서는 true, 나머지는 false를 반환
// const manuel = personData.find((person, idx, persons) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// // find와 같지만 인덱스값을 반환한다.
// const maxIndex = personData.findIndex();

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustPrices = [];

// // for (const price of prices) {
// //   taxAdjustPrices.push(price * (1 + tax));
// // }

// // forEach 함수를 취하며 최대 3개의 인수를 받는다
// // for of 문과 같은 효과를 낼수 있는데 거기서 인덱스값을 받을수 있는것이 장점
// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustPrices: price * (1 + tax) };
//   taxAdjustPrices.push(priceObj);
// });

// console.log(taxAdjustPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

// 배열의 값을 재정의 하여 신규 배열을 만들어 반환하는 map (변환)
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustPrices: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxAdjustedPrices);

// 배열 정렬
// 문자열 논리로 정렬하는 sort -> 숫자의 경우 맨 앞자리만을 보고 정렬
// 따라서 숫자 논리로 만들어서 사용 가능
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
// 정렬된 것을 역으로 바꾸는 reverse,
// 오름차 내림차를 잘 사용하여 reverse를 사용하지 않는것이 좋음
// console.log(sortedPrices.reverse());
console.log(sortedPrices);

// filter 는 true, false 값을 반환하고 false값은 삭제하여 새로운 배열을 생성
// const filteredArray = prices.filter((price, index, pirces) => {
//   return price > 6;
// });

// arrow function 으로 더 짧게 줄일 수 있다. 사용하지 않는 매개변수, 괄호, 리턴등을 뺄수 있다.
const filteredArray = prices.filter(price => price > 6);

console.log(filteredArray);
