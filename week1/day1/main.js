var index;
// made a comment

var myStr = "it's a string";

myStr = 23432;


console.log(myStr);
//            0      1      2         3
var array = ['dog', 'cat', 'horse', 'fish'];

console.log(array.push(myStr));
// array[100] = 10;
// console.log(array);

console.log('index before', index);

for (let index = 0; index < array.length; index++) {
  console.log('index is ' + index, array[index]);
}

console.log('index after', index);

// for (var index in array) {
//   console.log('index is ' + index, array[index]);
// }

// for (var element of array.entries()) {
//   console.log('element is ', element);
// }

var person = {
  eyeColor: 'blue',
  hair: 'red',
  name: 'Sally',
  age: 234,
  key: 'this is a key'
};

person.legs = 4;

// console.log(person['name']);

// for (var key in person) {
//   console.log('key is ', key, person[key]);
// }


function sayHello(name, ...stuff) {
  var thing = 'this is a thing';
  console.log(stuff);
  console.log('Hello ' + person.name);
  console.log(`Hello ${name}`);
}

// sayHello('Bob', true, 234234, {});
// console.log(thing);