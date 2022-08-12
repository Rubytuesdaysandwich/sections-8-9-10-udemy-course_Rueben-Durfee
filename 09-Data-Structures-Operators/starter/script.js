'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //order: function (starterIndex, mainIndex) {
  // return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  openingHours: {
    //object
    thu: {
      //property of object
      open: 12, //child property of thursday
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1, //default value being assigned to the parameter
    mainIndex = 0, //default value
    time = '20:00', //default value
    address,
  }) {
    console.log(
      //log the results to the console
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`
    );
  },
  orderPastas: function (ing1, ing2, ing3) {
    console.log(
      `here is your declicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//rest operator------------------------------------------
/*
const arr = [1, 2, ...[3, 4]]; //when the ... is to the right of the assignment operator sign it is spread
//when it is to the left is is a rest operator sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
//2)functions
const add = function (...numbers) {
  //using rest operator in the function parameters
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i]; //loop the length of the array
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
add(...x); //using spread operator

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
//they look the same but operate opposite from each other.
//rest used on multiple variables, rest used on multiple values
//end rest operator---------------------------------------
*/
//!==========================================================
//the spread operator---------------------------------------
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[2]]; //this is an array literal
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); //this is using the spread operator to output the contents of the newArr
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; //expanding the array from the mainMenu and adding a new object to it Gnocci
console.log(newMenu);
//copy array
const mainMenuCopy = [...restaurant.mainMenu];
//join 2 arrays
const menu = [...restaurant.starterMenu, restaurant.mainMenu];
console.log(menu);

//Iterables: arrays,strings,maps,sets. NOT objects
const str = 'Jonas';
const letters = [...str, '', 's.'];
console.log(letters);
console.log(...str);
//console.log('j', 'o');
//console.log('${...str} Schmedtmann');

//
const ingredients = [
  //an array of prompts to ask the user for ingredients
  prompt("lets's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPastas(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPastas(...ingredients);

//objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Gscauuiseppe',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant }; //making a copy of the restaurant and then changing the name
restaurantCopy.name = 'ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
//-----------------------------------------------------end spread operator
//!====================================================
/*
//destructuring objects
restaurant.orderDelivery({
  //this is data being passed into the object
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  //this is data being passed into the object
  address: 'Via del sole, 21',
  starterIndex: 1,
});
// destructuring objects------------------------------------start
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
const { menu = [], starterMenu: starters = [] } = restaurant; //setting up default values
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c }, //destructor friday and then select the child of friday which is open and close
} = openingHours;
console.log(o, c);
*/

//!===========================================================
// end------------------------------------------------------
//destructing arrays start--------------------------
/*
const arr = [2, 3, 4]; //this is without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructering arrays
const [x, y, z] = arr; //this is an example of how a array is destructured
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;//this is the same thing as [main, secondary] = [secondary, main];
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]; //using this method you don't need the temporary variable
console.log(main, secondary);

//recieve two return value from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//nested array inside an array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;//* the  , , is used to skip a place in the array
// console.log(i, j);
const [i, , [j, k]] = nested; //destructured to the variable nested
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9]; //8 and 9 are assigned to 0 and 1 spots in the array r is undefined the [p = 1, q = 1, r = 1] are default values
console.log(p, q, r);
*/
//end destructing arrays
