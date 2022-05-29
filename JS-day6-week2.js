// Navigating DOM
console.log('Document Object Model');



let main = document.getElementById('nav'); // most popular beacusae it is unique to that item

console.log('line 5', main);


let containers = document.getElementsByClassName('container');
console.log(containers);

//console.log(document.getElementById("pId").innerText);

// TASK - get all the p tags in a HTML document

let paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);


// can we use CSS to select the elements?
/* syntax = document.querySelector("target") */

//querySelector()
//querySelectorAll()

//let queryA = document.querySelectorAll( :ul > li);

//console.log(queryA);

let sell1 = document.querySelector('.container'); // returns only first element
console.log(sell1);

//let sell = document.querySelectorAll('#nav'); //returns all elements

let sell = document.querySelectorAll('.container');
console.log(sell);

let section = document.querySelectorAll('.salad li');
console.log(section);

let test1 = document.querySelectorAll('#nav>ul li').innerText;
console.log(test1);

let button = document.querySelector('button');
console.log(button);

////Syntax for Event Listeners: target.addEventListener('event type', function(){

// code to run in function;

//});

let paragraph1 = document.getElementById("para"); ( // create dif selection of html code  
    paragraph1.addEventListener('mouseover'), function run() {
        paragraph1.style.backgroundColor = ("#000");
        paragraph1.style.color = ("#fff");
        console.log('Mouse Inside');
    }

    paragraph1.addEventListener('mouseout'), function run() {
        paragraph1.style.backgroundColor = ("#fff");
        paragraph1.style.color = ("#000");
        console.log('Mouse Outside');
    }

let paragraph2 = document.getElementById("para2");
let button = document.getElementById('btn');
let square = document.getElementById("box");
   // scenario: add an event listenier to show a message when the user hovers over th paragraph
    button.addEventListener('click', function run (){
        if(paragraph2.style.display != 'none'){
            //condition check if text is showing if it is ti will hide it (none)
            paragraph2.style.display = 'none';
        }
        else
        paragraph2.style.display = 'block'; //
    });










