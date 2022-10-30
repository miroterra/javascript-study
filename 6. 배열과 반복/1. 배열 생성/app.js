// 배열을 만드는 가장 기초 []
const numbers = [1, 2, 3];
console.log(numbers);

// new Array에 단일 숫자를 넣으면 만들어질 배열에 대한 길이로 표시
const moreNumbers = new Array(5);
console.log(moreNumbers);

// 전역에서 사용 가능한 배열 객체에 대한 특별한 메서드
const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

// 유사 배열 객체
const listItems = document.querySelectorAll('li');
console.log(listItems);

// 이터러블이나 유사 배열 객체가 들어간다. 다수의 인수가 들어가면 안된다.
const moreNumbers2 = Array.from('Hi!');
console.log(moreNumbers2);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', { moreDetail: [] }];
