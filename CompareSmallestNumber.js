'use strict'

const array = [3, 8, 5, 1, -1, 1, 7, 6, 2, -3];
console.log("Initial array:  " + array);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let newArray = [];

function getPositive(array) {
   return array > 0;
}

function getUnique(positiveSortedArray) {
   return new Set(positiveSortedArray);
}

console.log("dont look into it - contains ununique elements-----------------------------------------------------------------------------------------------------------------------");
let posSortedArray = function (array) {
   let newArray = array.filter(getPositive);
   return newArray.sort(function (a, b) {
      return (a - b);
   });
};

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

let finalArray = getPositiveSortedUniqueArray(array);

function convertIntoNumber(finalArray) {
   let finalNumber = finalArray.join("");
   finalNumber = Number(finalNumber);
   console.log(finalNumber.__proto__);
   return finalNumber;
}
console.log(finalArray);//as variable
console.log(convertIntoNumber(finalArray));//as variable

console.log("---------------------------------------------------------------------------");
console.log(" ");

