"use strict";
//Problem solving is very important skill
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) max = curTemp; // need to do this for minimum
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min); // we need to call and check how max and min work
  return max - min;
};
calcTempAmplitude([3, 7, 5, 1, 8]);
calcTempAmplitude(temperatures);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// function should now take two arrays as argument
// need for another function? not at all
// just merge two arrays

// just copy the function and call it with new name;

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp; // need to do this for minimum
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min); // we need to call and check how max and min work
  return max - min;
};

calcTempAmplitudeNew([3, 5, 7], [11, 25, 14]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 7], [11, 25, 14]);
console.log(amplitudeNew);

//BUG FIXING

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: 3, //Number(prompt("Degrees celsius")), // step c: fix
  };
  console.log(measurement);
  console.table(measurement); // gives nice formatted versin of object
  console.log(measurement.value);
  //console.error(measurement.value); nice illustration
  //console.warn(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//

console.log(measureKelvin());

/*Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4] */

// Problem:we have an array of temperature forecast for 3 days writing function that takes each value from string
// sub prob 1 = creating function that takes each value in array
// sub prob 2 = this function also needs to go thru array and put the value into a string along with incrementing number of days for each item in the array - needs loop function
// sub prob 3 = need to test this function with two arrays so need to merge two arrays. so this function should take two parameters ???
// sub prob 4 = main issue is how to get each array value written with day number

// 1- Understanding the Problem:
// a) Arry transformed tostring, sperated by ...
// b) What is the X days? answer: Index + 1

// 2- Breaking up into sub-problems
// - Transform array into string
//- Transform each element to string with C
// - Srings need to contain day
// - Add ... between elements and start and end of string

/*const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function () {
  const temp1 = arr1;
  let i = temp1[0];
  let temp2 = arr1.concat(arr2);
  console.log(temp1);
  let dayNumber = arr1.indexOf(arr1[i]) + 1;

  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1.indexOf(arr1[i]));
    let dayNumber = arr1.indexOf(arr1[i]) + 1;
    console.log(`.... ${arr1[i]} ℃ in ${dayNumber} day(s)...`);
    let temp = arr1[i];
  }

  return;
};
console.log(printForecast());
console.log(`.... ${arr1[i]} ℃ in ${dayNumber} day(s)...`); */

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}℃ ... ${data1[1]}℃ ... ${data1[2]}℃ ...`); // it will look smthg like this but this hard coded and missing days.
/* 1 step : const printForecast = function (arr) {  // sub 1
  let str = "";
  for (let i = 0; i < arr.length; i++) {     // sub 2
    str = str + `${arr[i]}℃`;  //sub 2
  }
  console.log(str);
};
printForecast(data1); */

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}℃ in ${i + 1} days ... `;
    //str +=`${arr[i]}℃ in ${i +1} days ... `; this can improve it += operator
  }
  console.log("..." + str); // if we put string with dots in the beginning it will look just like in the assigment
};
printForecast(data1);
printForecast(data2);
/*const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function () {
  const temp1 = arr1;
  let i = temp1[0];
  let temp2 = arr1.concat(arr2);
  console.log(temp1);
  let dayNumber = arr1.indexOf(arr1[i]) + 1;

  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1.indexOf(arr1[i]));
    let dayNumber = arr1.indexOf(arr1[i]) + 1;
    console.log(`.... ${arr1[i]} ℃ in ${dayNumber} day(s)...`);
    let temp = arr1[i];
  }

  return;
};
console.log(printForecast());
console.log(`.... ${arr1[i]} ℃ in ${dayNumber} day(s)...`); */
