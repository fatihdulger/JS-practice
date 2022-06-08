const friend1 = 'Michael';
const friend2 = 'Steve';
const friend3 = 'Peter';

/* const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2022);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]); // to get the last item in the array !!!!

friends[2] = 'Jack'; // but you cant change entire array it is not allowed

// friends = ['Alice', 'holly']; this is not allowed!!

console.log(friends);

const firstName = 'Jonas';

const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends]; // JS expects expression inside the arry even you can put another array inside
console.log(jonas);

// Exercise

const calcAge1 = function (birthYear) {
    return 2037- birthYear;
}

const years1 = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge1(years1)); // you cant do any operations with arrays

const age10 = calcAge1(years1[0]);
const age11 = calcAge1(years1[1]);
const age12 = calcAge1(years1[2]);
const age13 = calcAge1(years1[3]);
const age14 = calcAge1(years1[years1.length - 1]);
console.log(age10, age11, age13, age14);

const ages = [calcAge1(years1[0]), calcAge1(years1[1]), calcAge1(years1[3]), calcAge1(years1[years1.length - 1])]
console.log(ages); */

// ADD ELEMENTs to ARRAY (push, unshift)

const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// REMOVE ELEMENTS ( pop, shift)

friends.pop();  // last element removed!
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();  // first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push('23');
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

friends.push(23);
console.log(friends.includes(23));

if(friends.includes('Steven')) {
    console.log('you have a friend called Steven');
}