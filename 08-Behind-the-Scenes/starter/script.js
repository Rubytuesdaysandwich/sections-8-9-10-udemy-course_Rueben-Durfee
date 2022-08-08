'use strict';
//--------------------start of section 8 -----------------------------------------------------------------
/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = ` ${firstName},you are ${age},born in ${birthYear}`; //this will use jonas
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating New variable with same name as outer scope's variable

      const firstName = 'steven'; //javascript will use the variable that is already in the same scope

      //Reassigning outer scope's variable
      output = 'NEW OUTPUT'; //access from the parent scope being redefined

      const str = `oh, and your a millenial, ${firstName}`; //first name is steven because it is in the same scope so javascript does not need to look any deeper.
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  //console.log(lastName);
  return age;
}
const firstName = 'jonas';
calcAge(1991);
*/
//global scope is outside of functions and if functions basically anything not in a container
//a function creates its own local scope
// if functions also have their own scope
//variables are accessible in their scope local/global
//functions can access the variables defined in the parent function

/*
//Hoisting and TDZ in Practice

// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

//functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

//example

console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('all products deleted');
}
// var d = 4;
var x = 2;
let y = 2;
const z = 3;
//this is like the global variable but on the browser
// console.log(d === window.d);
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
//the this keyword

//method this =<object that is calling the method
//simple function call with this = undefined
// arrow functions = this of surround function lexical this do not get this
// eventListener this=DOM element that the handler is attached to
//new,call,apply,bind = later in the course

//this does NOT point to the function itself, and also NOT the its variable environment
/*
console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);
const calcAgeArrow = birthYear => {
  //arrow function
  console.log(2037 - birthYear);
  // console.log(this); //not the keyword this for this function type of global this
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

//this keyword will point to the object calling the method

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;

matilda.calcAge();

const f = jonas.calcAge;
//f(); //regular function call so this function also undefined
*/
//var firstName = 'Matilda'; //create property on the global object
//const jonas = {
//firstName: 'jonas',
//year: 1991,
//calcAge: function () {
//console.log(this);
//console.log(2037 - this.year);
//const self = this; //self or that
//*1st solution
// const isMillennial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
//   //console.log(this.year >= 1981 && this.year <= 1996);
// };
//*solution 2
/*
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); //arrow function
  },
};
jonas.greet();
jonas.calcAge();
//in the global scope
//object literal
//console.log(this.firstName);

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);
var addArrow = (a, b) => {
  console.log(arguments); //does not work with arrow functions
  return a + b;
};
addArrow(2, 5, 8);
*/

// primitives and objects in practice
/*

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
const me = {
  name: 'jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
//{name: jonas age:27}
console.log('Me', me);
//{name: jonas age:27}
*/

//primitives types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//objects reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica={};

//if it was let it could be changed

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
//works only on the first level Object.assign({} shallow copy
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('john');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
//-------------end section 8---------------------------------------------------------------------------------------------
