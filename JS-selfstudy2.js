// Math Object (these prenamed/predifned with Math thats why math object)
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 4.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//Random Number
const random = Math.random()
console.log(random); // will always be between 0-1

console.log(Math.round(random*100)); // to obtain random number between 1-100

// Primitive & Refence Types
// primitive values stored in stack which is limited... heap has more space avaible but slow.  reference types stored in heap.

// PRIMITIVE VALUES in code shown below it doesnt change the second score
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`ScoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`ScoreOne: ${scoreOne}` , `scoreTwo: ${scoreTwo}`);

//REFERENCE VALUES:

const userOne = {name: 'ryu' , age: 30 };
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 40; // this change will change on both users One Two
console.log(userOne, userTwo);

userOne.name = 'Fatih';
console.log(userOne, userTwo);
