let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/golf-ball.jpg') {
      myImage.setAttribute ('src','images/golf-ball2.jpg');
    } else {
      myImage.setAttribute ('src','images/golf-ball.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
	setUserName();
} else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Golf is cool, ' + myName;
}
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Golf is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}


let myVariable = 'Bob';
myVariable = 'Steve';

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
*/