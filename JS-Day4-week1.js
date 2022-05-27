// Arrays and Objects in JS
// array is esstentially is a list

const owner = {firstName: "Joe", lastName:"Bloggs", company:"Blogs by Blog", age:45}
// objects 

console.log(owner.firstName)
console.log(owner.age);

// Function

let totalPrice = till(4,12);
// for the purpose of the demo, the first number = quantity (x), second = price (y)

function till (x,y) {
    return x * y
};

console.log(totalPrice);

function netPay(){

}
//Create multi arthmetic calucaltor

//HTML: you need to covert the p to a dropdown box (input type), id


function sumUp(valueOne, valueTwo) {

    //convert strings to numbers and add together  
  
    return Number(valueOne) + Number(valueTwo); // convert string value to a number value
  
  };
  function SumAway(valueOne, valueTwo) {
      return Number(valueOne) - Number (valueTwo)
  };
  
  function SumMulti (valueOne, valueTwo) {
      return Number(valueOne) * Number (valueTwo)
    
  };
  function SumDiv(valueOne, valueTwo) {
      return Number(valueOne) / (valueTwo)
  };


  // valueOne in the above acts in the same way as x or y.
  
  
  
  // define some basic variables we need for the calculate function
  
  //var btn = document.getElementById('sumbtn');
  
  const numberOne = document.getElementById('numberone');
  
  const numberTwo = document.getElementById('numbertwo');
  
  const result = document.getElementById('result');
  
  
  
  //console.log(numberOne.value);
  
  //console.log(numberTwo.value);
  
  
  
  //Calculate - the fuction that brings it all together
  
  function calculate(){
  
    //sum calls the sumUP function and valueOne and valueTwo are provided inside brackets
  
    var sum = sumUp(numberOne.value, numberTwo.value); //
  
    // numberOne.value = will get the input from the user for that box (2, 67, 890)
  
      result.value = sum.toString();
  
    //result is converted to a string and applied to the value property of our result input
  
  };

  function calculate(){
if(id === "minus")

  }
  else if (id === "divide"){

  }
  else if (id === "multi"){

  }
  else {
      var
  }
  

  const operator = document.getElementById