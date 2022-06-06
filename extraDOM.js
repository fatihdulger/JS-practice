/*DOM and Events to set up:

1.) Click - show and hide menus

2.) Mouse over and out - highlight to the user which link they are currently on
      - will need to change text and background color as minimum

3.) Mouse enter and leave - current openings (work for us)
      text will become larger when entered and return left

//Code on all sheets will need to be altered!
4.) Create a Basic form, the text inputs will change background color and 
      text color when keypress event activated */


/* let myButton = document.querySelector('.btn')

myButton.addEventListener("click", show);

function show(){
    var element = document.querySelector(".drink")
    if(element.style.display === 'none') {
        element.style.display === 'block';
    }else{
        element.style.display === 'none';
    }

}; */
/*
const address = document.getElementById('address');
const tel = document.getElementById('tel');
const work = document.getElementById('work');

address.addEventListener('mouseenter', function(){
    address.style.fontSize = '30px'
})
address.addEventListener('mouseleave',function(){
    address.style.fontSize = '12px'
}) */


let drinkMenu = document.getElementById('toggle-drink');
let drinkBtn = document.getElementById('drink-btn');
drinkBtn.addEventListener('click', function toggle () {
    if (drinkMenu.style.display != "none"){
        drinkMenu.style.display = "none";
        drinkBtn.innerText = "Hide Menu";
    } else {
        drinkMenu.style.display = "block"
        drinkBtn.innerText = "Show Menu";
    }
});

// 3 links

let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let links = [link1, link2, link3];
console.log(links);

links.forEach(function(link){
    link.addEventListener('mouseover', function out(){
    link.style.backgroundColor = "#820B8A";
    link.style.color = "#A8AEC1";
    //link.style.fontWeight = "bolder"   
    });
});
links.forEach( e => {
    e.addEventListener('mouseout', back => {
    e.style.backgroundColor = "#A8AEC1";
    e.style.color = "#820B8A";   
});

});

/* list.addEventListener('mouseover', function over(){
    if(this.id === "link1"){
        link1.style.backgroundColor = "#849738";
    } else if (this.id === "link2"){
        link2.style.backgroundColor = "#849738";
    } else if (this.id === "link3") {
        link3.style.backgroundColor = "#849738";
    }
     else {
        list.style.backgroundColor = "#A8AEC1";
    }) */

//task 3

const address = document.getElementById('address');
const tel = document.getElementById('tel');
const work = document.getElementById('work');

address.addEventListener('mouseenter', function(){
    address.style.fontSize = '2rem'
})
address.addEventListener('mouseleave',function(){
    address.style.fontSize = '1rem'

// do that for tel

});

work.addEventListener('mouseenter', function(){
    work.style.fontSize = '2rem'
})

work.addEventListener('mouseleave', function(){
    work.style.fontSize = '1rem'
});


