// Sets

// set 에서는 특정 메서드를 사용하여야 한다.

// const ids = new Set(['Hi', 'from', 'set!']);

// ids.add(2);
// has 메서드는 어떤 값을 가지고 있는지.
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }
// entries 메서드는 set의 모든 요소를 볼 수 있고 이터러블을 반환하여 for,for of 문을 사용할 수 있다.
// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// Maps

// const person1 = { name: 'Max' };
// const person2 = { name: 'Manuel' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

//  데이터 추가
// personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// console.log(personData);
// maps에서 데이터를 가져오는 방법
// console.log(personData.get(person1));

//  maps에서 데이터 출력 방법은 3가지로 모드 for of 반복문 사용 가능

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// WeakSet
// WeakSet,Map 은 메모리 사용을 더욱 효율적으로 하기 위해 사용.
// WeakSet 은 객체만 저장 가능하며 숫자나 문자열은 저장할 수 없다.
let person = { name: 'Max' };
const persons = new WeakSet();
person.add(person);

// ... some operations
// person = null;

console.log(person);

// WeakMap
const personData = new WeakMap();
personData.set(person, 'Extra info');

person = null;

console.log(personData);
