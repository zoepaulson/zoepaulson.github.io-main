const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter a New Name');
  para.textContent = `Player 1: ${name}`;
}

let myVariable;
myVariable = 'Zoe';

let myVariable2 = 'Anthony';
// string

let myNumber = 17;
// number

let myBoolean = true;
// boolean

let myArray = [12, 'bob', true];
// array

let myObject = document.querySelector('p');
// object, but all the above are also objects

6+5;
// addition
'hello'+'world';
// string addition (concatination)

myNumber === 4;
// asks if myNumber is equal to 4, this will come out as false

!(myNumber === 3);
// exclamation means not, so the paranthesis will come out as true, but the ! will make it the opposite, so this will come out false
// same with myNumber !== 3;

let iceCream = 'Chocolate';

if (iceCream === 'Chocolate') {
  alert('Yay I love chocolate ice cream!')

}

document.querySelector('html').addEventListener('click', function(){
  alert('Ouch, stop poking me!');
});
