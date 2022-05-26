console.log('good afternoon cohort 10')
console.log('numberA')
console.log('numberB')
console.log('numberC')
console.log('numberD')
let numberB = 5;


/* DATA TYPES */

// NUMBER 
const height = 200;

const weight = 85;
/*or with let height = 200; let weight = 85;*/
console.log('const height + const weight')

let lName1 = "Jones";

const lName2 = 'James'; //convention this is the way you can name string in double quotation mark
console.log('lName2');

//Objects
let profile = {fName:"Fatih", lName:"Dulger", age:37}
console.log(profile);
console.log(profile.age);

const x = 7;
const y = 7;
const z = 9;

let p = (x == y); // returns true (1, TRUE)
let q = (x == z); // returns false (0, FALSE)

console.log(p); 
console.log(q);

const flavours = ["vanilla", "chocolae", "Strawberry", "Mint"];
console.log(flavours[2] + "",flavours[3]);

flavours.push("lemon");
console.log(flavours);
flavours.push("orange", "rocky road", "truffles");
console.log(flavours);

console.log(flavours [6]);
flavours[1]= "peanut"
console.log(flavours[1]);


console.log('fatih' > 'tim');
let town="York";
let city="york";
console.log(town==city);
//[16:11] Timothy Jones
/*Task 1  - type out the following into code, you can replace the word "value" with your own values:let x = 3;let y = 4;let z = 5;

[16:11] Timothy Jones
1) value equal to value plus value x == (y+z)
2) value not equal to value plus value 
3) value equal to value divided value
4) value equal (value and type) to value
5) value greater than value
6) value subtract value less than or equal to value plus value 
7) value times value greater than value */

let a = 3;
let b = 4;
let c = 5;

console.log(a==(b+c))
console.log(a < (b+c))
console.log(a==((b+c)/a))
console.log((a +"a")==(a+a))
console.log(a>b)
console.log((b-c)===(a+b))
console.log((a*a)>= (b+c))


let email = 'dulgerfatih@gmail.com'
console.log(email)

let firstName = "Brandon"
let lastName = 'Sanderson'
console.log(firstName+lastName);
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(fullName[0]);

console.log(fullName.length);
console.log(fullName.toUpperCase());
//let result = fullName.toLowerCase();
//console.log(result);
//console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

let indexA = email.lastIndexOf('i');
console.log(indexA);
    
//let sliceA = email.slice(0,6);

//let sliceA = email.substring(6,17)
let sliceA = email.replace('d', 'v ')
console.log(sliceA);

let radius = 10;
const pi = 3.14;
console.log(radius,pi);

//console.log(10/2);
//let result = radius % 3;
//let result = pi * radius**2;
let result = 5 * (10-3)**2;

console.log(result);

let likes = 10;
console.log(likes);
likes = likes + 1;
console.log(likes);
likes--
console.log(likes);

//likes += 10;
//likes -=5;
//likes *=2;
likes /= 2;
console.log(likes);


