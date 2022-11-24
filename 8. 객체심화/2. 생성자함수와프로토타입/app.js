class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Max';

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(123);
  }
}

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function () {
//     console.log(123);
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

Person.prototype.printAge = function () {
  console.log(this.age);
};

console.dir(Person);

const p = new Person();
p.greet();
console.log(p.__proto__ === Person.prototype);
