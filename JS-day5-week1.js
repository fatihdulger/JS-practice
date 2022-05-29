/* let age = prompt("How old are you");

let check = confirm ("Are you sure?");

let year = new Date ();

//alert - alert query
alert(`You were born around ${year.getFullYear()-age}`);

//// Create an age verification system, using an If Statement and a combination of

// prompt, confirm and alert

function ageCheck(){
    let userAge = prompt("Please give yor current age:")
    if (Number(userAge) >= 18) {
        confirm("Fantastic! We have approved your age.")
    }
    else if (Number(userAge) === 18) {
        confirm("Do you have ID to confirm your age?");
        console.log(userReply);
        if (userReply === true) {
            //we want to give the user the chance to re-enter their age
        let userAge = prompt ("Please give your current age:")
        }
        else {
            alert("we are very sorry, but we must have proof of ID before we can allow purchase")
        };
    } else {
        alert("We are very sorry but you must be 18 or over");
    };

};
ageCheck()  */

// Loops Very Important
// for has 3 statements; 1st - one time execution, 2nd statement : we need this as in condition  so this should be condition 

let x = 5; // this value would be redefined!

for (let x = 0; x<10; x++) { // you can not use var here but you can you use const 
    console.log(x);

} // 0,1,2,3,4,5,6,7,8,9,
// x = 0, check that against condition

const fruits = ["apple", "banana", "pear", "grapes", "cherries", "plum", "pineapple"]; // this is array
let data =""; // empty string
for (let x in fruits) {
    data +="" + fruits[x] + "<br>";
    console.log(data);
    //document.getElementById("fruit").innerHTML = data;
};
console.log(data);

// forEach  - this is predefined!

const fruitsA = ["apple", "banana", "pear", "grapes", "cherries", "plum", "pineapple"];
fruitsA.forEach(myFunction);

function myFunction(item) {
    let text = "I chose a"+ " " + item;
    console.log(text);
};
/*function myFunction(fruits) {
    let text = "I chose a"+ " " + fruits;
    console.log(text);
}; */

// while loop

let i =0; // content variable
let content="The number"; // content variable

while (i < 15) {
    content += " " + i + " is less than 15"; + i++;
    console.log(content);
};

// set up below - will list items one by one. Aboce will add on to existing string.

let z = 0;
while (z < 5) {
    let content2 = z;
    z++;// incrementing inside while loop
    console.log(content2);

}; // if z 15 == then the code wont run

// Do-While Loop
let contentB = "The number";
let b = 14; // because of code order  do loop will ALWAYS run once (my give unexpected result)
do {
    contentB += b + " is less than 15 ";
    b++;
    console.log(contentB);
}
while (b > 15); // false it will stop running
// All loops will run while condition  == true., once false they will stop.

// Task - 1 Write code that prints the Fibonacci sequence (0,1,1,2,3,5,8,13)

// Task - 2 Create a for loop where the output will display only the array item that strictly matches the username(array) value(array-items)

/*function fibonacci(n){

    var n1=0;

    var n2=1;
  
    var count=2;
  
    var n3;
  
    console.log(n1,n2);
  
    while loop (count<n){
  
      // figure out while loop
  
    }
  
    }; */

    