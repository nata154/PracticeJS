'use strict'

const array = [3, 8, 5, 1, -1, 1];
console.log("Initial array:  " + array);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let newArray = [];

console.log("dont look into it - contains ununique elements-----------------------------------------------------------------------------------------------------------------------");
let posSortedArray = function (array) {
   let newArray = array.filter(getPositive);
   return newArray.sort(function (a, b) {
      return (a - b);
   });
};

function getPositive(array) {
   return array > 0;
}

console.log(posSortedArray(array));//as variable
console.log("---------------------------------------------------------------------------");
console.log(" ");





console.log("dont look into it - by steps-----------------------------------------------------------------------------------------------------------------------");

function getPositiveSortedArray(array) {
   let newArray = array.filter(getPositive);
   return newArray.sort(function (a, b) {
      return (a - b);
   });
};

function getPositive(array) {
   return array > 0;
}

let positiveSortedArray = getPositiveSortedArray(array);
console.log("Positive sorted array:  " + positiveSortedArray);//as function

let set = new Set(positiveSortedArray);
let str = Array.from(set);
let str2 = str.join("");
console.log(set);
console.log("Result number: " + str2);
console.log("---------------------------------------------------------------------------");
console.log(" ");




console.log("in one function *********************************************************************");
function getPositiveSortedUniqueArray(array) {
   let newArray = getUnique(array);
   newArray = Array.from(newArray).filter(getPositive);//set into array
   return newArray.sort(function (a, b) {
      return (a - b);
   });

};

function getPositive(array) {
   return array > 0;
}

function getUnique(positiveSortedArray) {
   return new Set(positiveSortedArray);
}

let finalArray = getPositiveSortedUniqueArray(array);
console.log(finalArray);//as variable
console.log(getPositiveSortedUniqueArray(array));//as function
console.log("---------------------------------------------------------------------------");
console.log(" ");

