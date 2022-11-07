const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

// 중괄호를 사용하는 방법이 객체 리터럴 표기법
let person = {
  //명확한 키 이름을 정하기 위해 '' 문자열로 키 이름을 정할 수 있다.
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]: '...',
  greet: function () {
    alert('Hi there');
  },
};

// person.age = 31;
// delete person.age; // 직접적인 삭제
// person.age = undefined; // 개발자가 직접 undefined를 넣어선 안된다.
// person.age = null;
person.isAdmin = true;

// '' 문자열로 키 이름을 정했으니 액세스하는 방법도 다르다.
console.log(person['first name']);
