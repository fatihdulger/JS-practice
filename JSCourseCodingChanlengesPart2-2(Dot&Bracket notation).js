'use strict';

const fatih = {
    firstName: 'Fatih',
    lastName: 'Dulger',
    age: 2022 - 1984,
    job: 'Software developer',
    friends: ['Tom', 'Dick', 'Harry']

};
console.log(fatih);

// DOT Operator, Dot Notation - Bracket Notation

console.log(fatih.lastName); // dot notation
console.log(fatih['lastName']); // bracket notation

const nameKey = 'Name';

console.log(fatih['first' + nameKey]);
console.log(fatih['last' + nameKey]);

/*const interestedIn = prompt('What do you want to know about Fatih?Choose between firstName, lastName, age, job and friends');
console.log(fatih[interestedIn]); // will turn undefined because interestedin not exist

if (fatih[interestedIn]) {
    console.log(fatih[interestedIn]);
} else {
    console.log('Wrong request!Choose between firstName, lastName, age, job and friends');

} */
fatih.location = 'London'; // this is like pushing item to array!
fatih['twitter'] = '@codeAdvice';
console.log(fatih);

// Challenge
//"Fatih has 3 friends, and his best friend is called Tom." write this in dynamic way not hardcoded way.

const fatihD = {
    firstName: 'Fatih',
    lastName: 'Dulger',
    friends: ['Tom', 'Dick', 'Harry'],
    
}
console.log(`${fatihD.firstName} has ${fatihD.friends.length} friends and his bestfriend is called ${fatihD.friends[0]}.`);  // ${fatihD.friends.length}>> this is about precedence in JS you can google on mdn operands done by left to right!!!

const fatihDulger = {
    firstName: 'Fatih',
    lastName: 'Dulger',
    birthYear: 1984,
    job: 'software developer',
    friends: ['Tom', 'Dick', 'Harry'],
    hasDriversLicence: true,
    //calcAge: function(birthYear) {
    //    return 2022 - birthYear;

    // }
    calcAge: function () {
        //console.log(this);
        this.age = 2022 - this.birthYear // *** this as keyword goes to birthYear in this object literal we calculate age once and pass the value for later use
        return this.age;
    }
    };


console.log(fatihDulger.calcAge()); // this keyword links it to birthYear in fatihDulger object so very useful and helps the ideal "dry code or dont repeat yourself"
//console.log(fatihDulger['calcAge'](1984)); 
console.log(fatihDulger.age);
console.log(fatihDulger.age);
console.log(fatihDulger.age);

// Challenge ***
// "Jonas is a 46-year old teacher, and he has a driver's licence

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    birthYear: 1981,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicence: true,
    calcAge3: function () {   // a method (actually similar to function) in the object literal
        this.age = 2022 - this.birthYear;
        return this.age;
    }, // there has to be coma between key-value pair properties after each property in object literals.
    getSummary: function() {  // another method in the object literal
        return `${this.firstName} is a ${this.calcAge3()}-years old ${this.job}, and he has ${this.hasDriversLicence == true ? 'a' : 'no'} driver's licence.`;
    }, // it is better to use calcAge3 here because it will not work unless calcAge3 was called before.
    // this keyword refers to the properties in this object literals because everything we refer is in this object if outside we can use jonas.
};


console.log(jonas.getSummary());

console.log(`${jonas.firstName} is ${jonas.age}-years old ${jonas.job}, and he has ${jonas.hasDriversLicence == true ? 'a' : 'no'} driver's licence.`)

