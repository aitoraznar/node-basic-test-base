var module1 = require('../module1/index.js');
var Person = module1.Person;

// Module 1
var john = new Person("John", "Box");
console.log(john.name);
// should equal "John Box"
john.name = "John Travolta";
console.log(john.lastName);
// should equal "Travolta"
console.log(john.firstName);
// should equal "John"
