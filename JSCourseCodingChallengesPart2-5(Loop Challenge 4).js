'use strict';

// LOOP: allows us repeat actions
 
// for Loop = keeps running while the condition on the second part is TRUE!

/*console.log('Lifting weights repitition 1');
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

/*console.log('---ONLY STRINGS---')

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
// if you dont know how many times your function will work USE WHILE loop */

/* Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array */

//SOLUTION

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

let bill = 22;

const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;  // const calcTip = function (bill) { return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * *.20}
    

console.log(calcTip(bill));

for(let i = 0; i <= bills.length -1; i++) {
    tips.push(calcTip(bills[i]))
    totals.push((bills[i]) + calcTip(bills[i]))
}
console.log(tips);
console.log(totals);
console.log(bills, tips, totals);

//BONUS Challange  (DIFFICULT)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//console.log(sum);
 

const calcAverage = function (arr) { // BEWARE !!!! arrow function doesnt work with loop 
    let sum = 0;
    for (let i = 0; i <= arr.length -1; i++) {
    //sum = sum + arr[i]
    sum += arr[i];
  }
    
    
    return sum / arr.length; // length is all the elements.
}

console.log(calcAverage(arr))
console.log(calcAverage(totals));// if you used arrow function or put loop outside of the function you cant use this on totals or tips




//calcAverage();
//console.log(calcAverage());


/*/different way

const calcAverage = function (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
} */

console.log(calcAverage(totals));
