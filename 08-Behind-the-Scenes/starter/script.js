'use strict';
//* function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = ` ${firstName},you are ${age},born in ${birthYear}`; //this will use jonas
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //creating New variable with same name as outer scope's variable

//       const firstName = 'steven'; //javascript will use the variable that is already in the same scope

//       //Reassigning outer scope's variable
//       output = 'NEW OUTPUT'; //access from the parent scope being redefined

//       const str = `oh, and your a millenial, ${firstName}`; //first name is steven because it is in the same scope so javascript does not need to look any deeper.
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   //console.log(lastName);
//   return age;
// }
// const firstName = 'jonas';
//* calcAge(1991);

//global scope is outside of functions and if functions basically anything not in a container
//a function creates its own local scope
// if functions also have their own scope
//variables are accessible in their scope local/global
//functions can access the variables defined in the parent function

//Hoisting and TDZ in Practice

// variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'jonas';
// let job = 'teacher';
// const year = 1991;

// //functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));
// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

// //example

// console.log(undefined);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('all products deleted');
// }
// // var d = 4;
// var x = 2;
// let y = 2;
// const z = 3;
// //this is like the global variable but on the browser
// // console.log(d === window.d);
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//the this keyword

//method this =<object that is calling the method
//simple function call with this = undefined
// arrow functions = this of surround function lexical this do not get this
// eventListener this=DOM element that the handler is attached to
//new,call,apply,bind = later in the course

//this does NOT point to the function itself, and also NOT the its variable environment

console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);
