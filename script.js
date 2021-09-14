/* DOM Manipulation
1. getElementById (It returns the element with the id name specified) */ 

const heading1 = document.getElementById('heading1');
console.log(heading1);

// 2. getElementsByTagName (It returns a collection of elements with the tag name specified)

const heading2 = document.getElementsByTagName('h2');
console.log(heading2);

// 3. getElementsByClassName (It returns a collection of elements with the class name specified)

const heading3 = document.getElementsByClassName('heading3');
console.log(heading3);

// 4. querySelector (It's little similar to CSS. We can select class name with dot and with id name with hashtag. If saying simply we can call elements directly)

const heading4 = document.querySelector('.heading');
console.log(heading4);

const heading5 = document.querySelector('#heading');
console.log(heading5);

// 5. querySelectorAll (It's similar to querySelector but it don't select only one element.)
const heading6 = document.querySelectorAll('.heading4');
console.log(heading6);

// Traverse DOM

// 1. Parent node

const heading7 = document.querySelector('heading5');
const parent = heading.parentNode;
console.log(parent);

// 2. Child Node ( It will give the children nodes and you anyone can select the desired childNode as well)

const parent1 = document.querySelector('.parent');
console.log(parent.childNodes);

// 4. nextElementSibling (It will tell about the previous element sibling)

const Sibling1 = document.querySelector('.heading5');
console.log(Sibling1.nextElementSibling);

// 5. previousElementSibling (It will tell about the previous element sibling)

const Sibling2 = document.querySelector('h3');
console.log(Sibling2.previousElementSibling);


// Manipulation (See the target element in html to see what is changed)
const heading8 = document.querySelector('.heading6');
heading8.innerHTML ='Hey bro How do you do?';
heading8.style.color = 'red';
heading8.style.fontSize = '50px';
heading8.classList.add('title');
heading8.classList.remove('heading6');

// Advanced Manipulation 

// 1. Creating elements with DOM manipulation //Really focus on querySelector. Don't add All with it else everything will be reversed.
const heading9 = document.createElement('h1');
heading9.innerHTML = 'created by DOM';
const parent2 = document.querySelector('.parent');
parent2.appendChild(heading9);
console.log(heading9);

const heading10 = document.createElement('h3');
heading10.innerHTML = 'web dev is awesome';
const parent3 = document.querySelector('.parent');
parent3.appendChild(heading10);
console.log(heading10);


const heading11 = document.createElement('h3');
heading11.innerHTML = 'Yo bro';
const parent4 = document.querySelector('.parent');
heading10. insertAdjacentElement('beforebegin', heading11); // You can see other options on web also that you can insert beforebegin, or many options are there.
heading11.classList.add('Yobro');
document.querySelector('.Yobro').style.color = 'blue';


// DOM events
// We do many things on a website like a click on any object or any keypress on keyboard. There are thousand of events in a website

const button = document.querySelector('#btn');
const heaDing = document.querySelector('#Heading');
button.addEventListener('click', function(event) {
    console.log('button clicked', event);
    btn.style.color = 'red';
    heaDing.style.fontSize = '20px';
    heaDing.style.color = 'purple';
} )

// Now it's time to code an exercise
// Go and see the code exercise