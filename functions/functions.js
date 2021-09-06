function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " is walking";
  };
}

const chris = new Person("Chris");
const pedro = new Person("Pedro");

console.log(chris.walk);
console.log(pedro.walk);
