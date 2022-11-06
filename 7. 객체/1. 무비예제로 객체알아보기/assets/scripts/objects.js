// 중괄호를 사용하는 방법이 객체 리터럴 표기법
let person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there');
  },
};

// person.age = 31;
// delete person.age; // 직접적인 삭제
// person.age = undefined; // 개발자가 직접 undefined를 넣어선 안된다.
// person.age = null;
person.isAdmin = true;

console.log(person);
