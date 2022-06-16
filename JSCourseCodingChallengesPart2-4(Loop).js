'use strict';

// LOOP: allows us repeat actions
 
// for Loop = keeps running while the condition on the second part is TRUE!

console.log('Lifting weights repitition 1');
console.log('Lifting weights repitition 2');
console.log('Lifting weights repitition 3');
console.log('Lifting weights repitition 4');
console.log('Lifting weights repitition 5');

// Loop 
for(let rep = 1; rep <= 10; rep++) { // rep = rep +1 >>> we learned this from operators rep++
    //console.log('Lifting weights repitition 1');  // string quotation mark make it static and only prints whatever inside marks. if you use template literal you can make it dynamic.
    console.log(`Lifting weights repitition ${rep}`);
}

const jonas = [
    'Jonas',
    'Smith',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true  //when you add 6th or more item to array below 1st loop will not work as we told it to stay below 5 instead we need to adjust the code to jonas.length as shown below;
];

const types = [];  // empty array we will fill it with below loop function

for(let i = 0; i < 5; i++) { // i = 0 because index in array starts from 0
    console.log(jonas[i]);
}

for(let i = 0; i < jonas.length; i++) {
    //reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //types[i] = typeof jonas[i];  // starts from jonas[0] as being string and goes all the way to boolean
    types.push(typeof jonas[i]);
}

// filling types array

//types[i] = typeof jonas[i];
//types[0] = 'string'; this works as the //types[i] = typeof jonas[i];
console.log(types);

// Examples

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037- years[i]);
}

console.log(ages); // this will show us how for loop has been used to insert ages calculation by ages.push() method by putting simple subtraction from 2037 by using years index numbers


/*const jonas = [
    'Jonas',
    'Smith',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true  //when you add 6th or more item to array below 1st loop will not work as we told it to stay below 5 instead we need to adjust the code to jonas.length as shown below;
]; */


// continue and break in Loops

console.log('---ONLY STRINGS---')

for(let i = 0; i < jonas.length; i++) {
    
    if(typeof jonas[i] !== 'string') continue; // loop will carry on if it doesnt run into string and when it finds string it will display and print as part of console.log side of the loop.

    console.log(jonas[i], typeof jonas[i]);

}


console.log('---BREAK with NUMBER---')

for(let i = 0; i < jonas.length; i++) {
    
    if(typeof jonas[i] === 'number') break; // when code runs till number the loop will stop so this will run until it comes to age side of the array

    console.log(jonas[i], typeof jonas[i]);

}

// Looping Backward 
const fatih = [
    'Fatih',
    'Dulger',
    2022 - 1984,
    'driver',
    ['Tom', 'Dick', 'Harry'],
];

// 0,1,2,3,4
//4,3,2,...0  -- we need to avoid hard coding as below; length -1 is better than typing 4
for(let i = jonas.length -1;  i >= 0; i--) {
    console.log(jonas[i]); // this will loop backwards from end of array to top
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
}

//While Loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep}🏋️`)
}
//lets type same as above loop with while: this will give us the same result.

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}🏋️‍♂️`);
    rep++;

}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...')
}
// if you know how many times your function will work USE FOR Loop e.g if you are working with arrays use for loop
// if you dont know how many times your function will work USE WHILE loop
