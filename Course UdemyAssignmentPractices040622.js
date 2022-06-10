
let javascriptIsFun = true;

console.log(javascriptIsFun);
javascriptIsFun = 'YES!'
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1984;
console.log(typeof year);

console.log(typeof null);



//VARIABLES ASSIGNMENT

//let country = 'Turkey';
//let continent = 'Euro-Asia'; 
//let population = '86';

/* console.log(country);
console.log(continent);
console.log(population);

let isIsland = 'false';
let language =

      
console.log(isIsland.typeof) */

//DATA TYPES ASSIGNMENT

//let language = 'Turkish';

/*const language = 'english';

const country = 'Turkey';

const continent = 'Euro-Asia';

const isIsland = "true";

//country = 'England'; assignment to const error

population = 49;

console.log(population);*/

/*let halfPopulation = (population / 2);
console.log(halfPopulation);

let finlandPopulation = 6;
console.log(halfPopulation > finlandPopulation)

/*function check(x,y) {
  if(x > y) {
    console.log(true);
    } else {
      return false;
    }
 
}
check(population, finlandPopulation); */

/*let averagePopulation = 33;

console.log(population < averagePopulation);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

description = `${country} is in ${continent} and its ${population} million people speak ${language}.`;
console.log(description);

//population = '120';

differencePopulation = population - averagePopulation;
if(population > averagePopulation) {
  console.log(`${country}'s population is above average of ${averagePopulation} million by ${differencePopulation} million`)
} else {
  console.log('false')
  
 
}

console.log('9'-'5');

console.log('19'-'13'+'17');
console.log('19'-'13'+17);
console.log('123' < '57');
console.log(5+6+'4' + 9 - 4 - 2);


const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
  console.log('Sarah can start driving licence.');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
  
}

const birthYear = 2001;
let century;

if(birthYear <= 2000) {
  century = 20;
  
} else {
  century = 21;
}
console.log(century);


/*let numNeighbours = Number(prompt("how many borders does your country have?"));

1

if (numNeighbours === 1) {
  console.log('Only 1 border')
}
else if(numNeighbours > 1) {
  console.log('More than 1 border');
  
} else { console.log('No borders')} */

/*const language = 'english';

const country = 'Turkey';

const continent = 'Euro-Asia';

const isIsland = false;

const population = 46;

//country = 'England'; assignment to const error



if (language === 'english' && population < 50 && !isIsland) {
  
  console.log(`You should consider ${country} to live in :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}; */




//copied from above - 
const language = 'english';

const country = 'Turkey';

const continent = 'Euro-Asia';

const isIsland = false;

let population = 46;

//country = 'England'; assignment to const error



if (language === 'english' && population < 50 && !isIsland) {
  
  console.log(`You should consider ${country} to live in :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
};


// by default always use const because changing variables  can cause bugs!!!!


var job = 'programmer'
job = 'teacher';

lastName = 'Dulger'; // you can declare variable like this but this is not recommended!

console.log(lastName);

/*const ageFatih = 2037 - 1991;
//const ageAhmed = 2037-2015;

console.log(ageFatih, ageAhmed);*/

// Math Operators:

const now = 2037;

const ageFatih = now - 1991;
const ageAhmed = now-2015;
console.log(ageFatih, ageAhmed);

console.log(ageFatih * 2, ageFatih / 10, 2**3);

// Assignment Operators:

let x = 10 +5;  // = 15 + operator declared before x =    <<<< works this way
console.log(x);

x += 10; // x = x (previously declared x) + 10 = 25


x *= 4;  //  x (last declared x here 25) * 4

x++; // adds 1 
x--;
x *=5;
x++;
x--; // minus 1 
x--;
console.log(x);

// Comparison Operators:  Results in BOOLEAN:

console.log(ageFatih > ageAhmed);

console.log(ageAhmed <= 18);
const isFullAge = ageAhmed >=18;

// PRECEDENCE there is an order for executing the result of operators 
console.log(now - 1991 > now - 2015); // returns true as it makes calculation first and then comparison
let a, b;
a = b = 25-10-5;  // x = y = 10, x = 10
console.log(a, b);

const averageAge = (ageFatih + ageAhmed) / 2  // if you dont use paranthesis you get weird result >>>> ageFatih + ageAhmed / 2 it doesnt work like this

console.log(ageFatih, ageAhmed, averageAge);
console.log(ageAhmed);

// Switch Statement: myfunction() { variables and text switch(variable){case "ABC": text ; break;} then what to do with chosen case then} then switch case will turn a value according to what was chosen.




function myFunction() {
  let text;
  const language = document.getElementById('language').value;
  switch(language) {
    case "Chinese":
    case "Mandarin":
      text = 'MOST number of native speakers!';
    break;
    case "Spanish":
      text = '2nd place in number of native speakers';
    break;
    case "English":
      text = '3rd place';
    break;
    case "Hindi":
      text = 'Number 4'
    break;

    case "Arabic":
      text = '5th most spoken language';
    break;
  
    default:
      text = 'Great language too :D';

  }
  document.getElementById('demo').innerHTML = text;

}

console.log(typeof language);

//Ternary Operator or Conditional Oper(operator turns a value because it is an expression ) - Conditional operator: >>> condition  ? function : function;

const age = 18;
age >= 18 ? console.log('I like to drink juice 🥤') :
console.log('I like to drink 💧');

age >= 18 ? 'juice 🥤' : 'water 💧';

const drink = age >= 18 ? 'juice 🥤' : 'water 💧';
console.log(drink);

let drink2;

if(age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'juice 🥤' : 'water 💧'}`);

population = 130;
population > 33 ? console.log(`${country}'s population is above avarege`) : console.log(`${country}'s population is below average`);
population = 86;

console.log(
 `${country}'s population is ${population > 33 ? 'above' : 'below'} average`);

// you can use template literals instead of quotation marks ("" or ''):
console.log(`just regular string`)

console.log('String with \n\ multiple \n\ lines');

console.log(`String 
multiple
lines`);  // you can use TL s for making new lines when using JS to create new line of html 

//TYPe COERCION

console.log('I am ' + 23 + ' years old.');  // type Coercion - implicit conversion of diffrent data types.!!!

console.log('I am ' + "23" + ' years old.'); // notice number above converted into string. both examples are same but types different.

console.log('23' - '10' - '3');


// Falsy value : 5 types : 0 , undefined, null, NaN and '',

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Fatih'));
console.log(Boolean({}));
console.log(Boolean('')); // when falsy value is in if else statement then the JS takes false value and returns else statement block not if 

let height = ''; // you can try all the falsy values to see else block working 

if(height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

// switch statement is used instead of complicated IF statements
// if you dont switch case you will run does like below
// instead switch(day) {}  + case 'dhkajhgd' : + function or consolelog  + break; and repeat for other cases

const day = 'sunday';

if( day === 'monday') {
  console.log('Plan course structure', 'Go to coding meetup');

} else if(day === 'tuesday') {
  console.log('Prepare theory videos');

} else if(day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if(day === 'friday') {
  console.log('Record videos');
} else if(day === 'saturday' ||  'sunday') {
  console.log('Enjoy your weekend 😊');
} else {
  console.log('it is not valid day')
}

// EXPRESSION

3 + 4
1991
true && false && !false  // these are all expression and returning some value.


