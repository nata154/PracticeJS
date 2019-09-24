'use strict'
let array = [10, 20, 30];

let doubledArray = array.map(x => x * 2);
console.log(doubledArray);

let tripleArray = array.map(function (x) {
   return x * 3;
})
console.log(tripleArray);