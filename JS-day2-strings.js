console.log('string are sequence of characters..');

let str1 = 'James';
let exStr = "Hello"; // conventin double quotation mark
let str2= "Charlie's book";
console.log(str2);

let bothQuo = "Charlie's book and 'Wonderland' message quotation";

//concatenation

console.log(str1 + " " + "is learning about JavaScript and " + str2 + " " + "is his favourite.");

//template literal - syntax = `${variable} `
let str3 = "Mike" // 

let str4 = "IT for Beginners"

var fullString = `${str3} is learning about JavaScript and ${str4} is his favourite.`;
console.log(fullString)

// length 
console.log(str4.length);

//escape sequence characters
// - escape character, second character will give the instruction (n, t or \)
// \n = newline, \t = tabspace, \ - to add an \ in the string

let aNewStr = 'hello\neveryone\thow\\are you?? ';
console.log(aNewStr);

//indexof or lastIndexOf 

let strS = 'This is a string';
let strF = 'Fatih';

// str1 = 'This is a string' = 13 character
// t= 0 h=1 i=2 s=3 space= 4 , his=1

console.log(strS.length);
console.log(strS.indexOf('his'));
console.log(strS.lastIndexOf('i')); // lastindexof is reverse check from end to start, will feed back first item position i = 13

//console.log(str1.indexOf('his'));// works left to right


//console.log(str1.lastIndexOf('i')); // reverse check from end to start, will feed back first item position (i = 13)

console.log(strS.slice(0,6));

console.log(strS.substring(3,16));
console.log(strF.slice(2,5));

// substrate = bringing the  whole range this is a string (result = his is ) index values = 123456

console.log(strS.substr(1,6))

console.log('line22' + strS.substring(2,6), 'line 11'); // line 22 "is a" line 11

var countries = ["France", "Germany", "Spain", "Netherland", "Ireland"]
console.log("I have been to a country that contains", countries[0].substring(1,5), "where did I go?");

console.log("I have been to a country that contains", countries[3].substring(1,5), "where did I go?");

// string and slice commonalities

console.log(strS);

let strin = '     tim             is a JS          learner                   ';

console.log(strin);
console.log(strin.trim()); // removes whitespace from both ends
console.log(strin.toUpperCase()); 
console.log(strin.toLowerCase());

// extracting characters from a string

var name1 = 'This is Fatih';
// f=0, a=1, t=2, i=3, h=4
console.log(name1.charAt(10));

// replace() // this 

let repStr = name1.replace('Fatih', 'Mualla');
console.log(repStr);


// CONVERSION

let a = String(1 + 1);
console.log(typeof a); // will tell us the data type
console.log(1 +1);
console.log(a); // this should giv us conversion

//repeat above for the items below;

let c = String(-12.123);
console.log(c);

String(1 + 1);

let d = String(true);//"true"
console.log(d);
console.log(typeof d)


String(false);
String(undefined);

let b = String(NaN);
console.log(b);

// how would the following convert? TRY THEM OUT in a JS file
let e = Number('abc');
console.log(e); //Nan

let f = Number(true);
console.log(f); //1

let g = Number(false);
console.log(g); //0

let h = Number(undefined)
console.log(h); //Nan

let i = Number(null);
console.log(i); //0

let ab = Number("4+5"); // string "45", number Nan, boolean, "true"
console.log(ab);

let abc = Number("4 + 5"); // string "45", number Nan, boolean, "true"
console.log(abc);

// Boolean Conversion;
// Syntax = Boolean (VALueto Coenvert)
//Example 3:
Boolean = ('902'); // = output >> True
console.log(Boolean);







