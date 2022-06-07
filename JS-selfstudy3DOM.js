/*const para = document.querySelector('p'); // grabs the first paragraph

console.log(para);
const para1 = document.querySelector('.error');
console.log(para1);
const para2 = document.querySelector('div.error');
console.log(para2);

const error = document.querySelectorAll('.error');
console.log(error);

const para4= document.querySelectorAll('p');
console.log(para4);
console.log(para4[2]);

para4.forEach(para => {
  console.log(para); 
}); */

const para = document.querySelector('p');

//console.log(para.innerText);

//para.innerText = 'Ninjas are awesome!';
// if we want to change all paragraph inside you do this

const paras = document.querySelectorAll('p');

//paras.forEach(nobody => {
   //nobody.innerText += ' new text';
   //console.log(nobody.innerText);
//});

const content = document.querySelector('.content');

//console.log(content.innerHTML);

//content.innerHTML += '<h2>THIS IS a NEW H2</h2>';

const people = ['Fatih', 'Mualla', 'Ahmed', 'Beyza'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.bbc.co.uk');
console.log(link.getAttribute('href'));
link.innerText = 'Nice news Website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
//mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green;'); // you can add or set any style or attribute it doeesnt matter if that element has that attribute;

const title = document.querySelector('h1');
//title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);
//if you want to add style

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
console.log(title.style); // if you are not sure what name property you will use you can alwasy refer to styles and see properties list on the console.
title.style.margin = ''; // to remove margin 

const content1 = document.querySelector('p');
console.log(content1.classList);
//content1.classList.add('error');
content1.classList.add('success');


const content2 = document.querySelector('.error');
console.log(content2.classList);
//content2.classList.remove('error');
content2.classList.add('success');


content3 = document.getElementById('lorem');
console.log(content3); 
content3.classList.add('error');
content3.classList.add('success');

content4 = document.getElementsByTagName('p')[1];
console.log(content4);
content4.style.fontSize = '25px';

const paras1= document.querySelectorAll('.classes p');
console.log(paras1);
paras1.forEach(p => {
    //console.log(p.innerText); // if you active you will not see 'error' text because span style is display none.
    console.log(p.textContent); // textContent shows hidden text as well regardless but innerText will not show if the display property is none.
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }

});

// toggle
const titleX = document.querySelector('.title'); // grab the element by class name title
 
titleX.classList.toggle('test'); // first one gives class 'test' but 
titleX.classList.toggle('test'); // second one removes the class 'test' it is visible when you go and check on console inspection by mouse hover over the item.










