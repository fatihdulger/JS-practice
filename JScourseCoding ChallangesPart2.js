'use strict';
//Functions

//Function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;

//age3 = calcAge3(1991);
const age3 = calcAge3(1991);  // we are capturing it to a varible
console.log(age3);

//const yearsUntilRetirement =


/*const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement; // we need return if we have more than 1 line of function in the block
} 

yearsUntilRetirement(1984);
console.log(yearsUntilRetirement(1984)); */

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037- birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1984, 'Fatih'));
console.log(yearsUntilRetirement(1986, 'Gulsah'));

// Arrow function doesnt take this. keyword 

function calcAge(birthYear, firstName) {
    let age = 2037 - birthYear;
    let retirement = 65 - age;
    console.log(`${firstName} is ${age} years old.`);
    return retirement;

}

const fatihRetires = calcAge(1990, 'Fatih')
console.log(calcAge(1990, 'Fatih'));

console.log(fatihRetires);

// Coding Challenge 1

/*function calcAverage (a, b, c) {
    const average = (a + b + c) / 3;
    return average;
}
calcAverage(44, 23, 71);
console.log(calcAverage(44, 23, 71));



let avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins); */

let calcAverage = (a, b, c) => {  // task 1 same as const calcAverage = (a, b, c) => (a, b, c) / 3;
    const average = (a + b + c) / 3;
    return average;
}
let avgDolphins = calcAverage(44, 23, 71);

console.log(avgDolphins);

let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas); // task 2

function checkWinner(avgDolphins, avgKoalas) {  // task 3
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win with ${avgDolphins} vs ${avgKoalas} of Koalas 🥳🎆🎇`);
        return;
    } else if(avgKoalas >= 2 * avgDolphins ) {
        console.log(`The winners are Koalas with ${avgKoalas} vs ${avgDolphins} of Dolphins`);
        return;
    } else{
        console.log('Sorry there is no winner 😔!');
        return ; 
    }
};

checkWinner(avgDolphins, avgKoalas);  // task 3 & 4

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas); // task 4

// the function is independent from other inputs it is standalone and can make same function with other parameters. they dont have to be avgDolphins etx

checkWinner(200, 400);


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

// you can use includes methods in function:

if(friends.includes('Steven')) {
    console.log('you have a friend called Steven');
}


'use strict';

// # CODING CHALLENGE #2 JS FundamentalsPart 2 :
/*Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) */

//let bill = 100;

//let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

let bill = 100;

function calcTip(bill) {
 let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 return tip;
}

// if you want to use function expression >>>
/* const calcTip = function(bill) {
    return bill >= 50 && <= 300 ? bill * 0.15 : bill * 0.20;
} */

calcTip(125);
console.log(calcTip(125));

const billsArray = [125, 555, 44];

const tipsArray = [calcTip(billsArray[0]), calcTip(billsArray[1]), calcTip(billsArray[2])];  // tipsArray = [tip1, tip2, tip3]
console.log(billsArray, tipsArray);

let tip1 = calcTip(billsArray[0]);
console.log(tip1);
let tip2 = calcTip(billsArray[1]);
console.log(tip2);
let tip3 = calcTip(billsArray[2]);
console.log(tip3);

const totalsArray = [billsArray[0] + tip1, (billsArray[1] + tip2), (billsArray[2] + tip3)]; // you can do without paranthesis
const totalsArray1 = [billsArray[0] + tipsArray[0], (billsArray[1] + tipsArray[1]), (billsArray[2] + tipsArray[2])]; // another way of array 
console.log(totalsArray);
console.log(totalsArray1);