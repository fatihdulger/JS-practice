// functionKeyword functionName()

function greet(){
// function body: we write the code here for what the function is going to do
// lookfor the id = greetings1, now go into the tags (innerHTML) 
document.getElementById("greetings1").innerHTML = "Good Day";

}
greet();

//Assigned greet2 to the arrow function

let greet2 = () => {
    // function body: we write the code here for what the function is going to do
    // lookfor the id = greetings2, now go into the tags (innerHTML) 
    document.getElementById("greetings2").innerHTML = "How are you doing today?";
    
}
//arrow function the function call happens after the assingment
greet2();

//create an arrow function to add two numbers

let addNums = (paraNum1, paraNum2) =>{
    return paraNum1 + paraNum2
}

// use the arrow function

let useAddnums = addNums(12,45) // assigned addNums arrow function to variable useAddnums

addNums(1,2);

// Display the answer
document.getElementById('add1').innerHTML = useAddnums

document.getElementById('add2').innerHTML = addNums(1,3);

function mouseOver(pHover) {
    pHover.style.color = "violet";
    pHover.style.background = "yellow";
    pHover.innerHTML = "MOUSEHOVER"
};

function mouseOut(pOut) {
    //document.getElementsByTagName("body").background
    pOut.style.color = "black";
    pOut.style.background = "white";
    
};


num1 = 34; //prompt("enter a number") //"Anne" //
num2 = 25; // prompt("enter a number: ") //23//

answer = num1 + num2
document.write("The answer is ", answer);





