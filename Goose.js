'use strict'

const allGeese = ["African goose", "Roman Tufled", "Toulouse", "Piligrim", "Steinbacher", "Mallard", "Hook Bill", "Crested", "Blue Swedish"];
const myGeese = ["African", "Roman Tufled", "Toulouse", "Piligrim"];

let allGeeseWitoutGoose = allGeese.map(x => x.replace(/ goose/g, "")).join(", ");
console.log("Without word goose: " + allGeeseWitoutGoose);

let allGeeseWitoutGooseFE = function rem() {
   console.log("Without word goose functional expression: " + allGeese.map(x => x.replace(/ goose/g, "")).join(", "));
};
allGeeseWitoutGooseFE();

let allGeeseWitoutGooseFERet = function remRet() {
   return allGeese.map(x => x.replace(/ goose/g, "")).join(", ");
};
console.log("Without word goose functional expression with return:  " + allGeeseWitoutGooseFERet());
console.log("----------------------------------------------------------------------------------------------------------------------------------------");


function findDifferentGeeseIteration(allGeese, myGeese) {
   var differentGeese = [];

   for (let i = 0; i < myGeese.length; i++) {
      let different = true;
      for (let j = 0; j < allGeese.length; j++) {
         if (myGeese[i] === allGeese[j]) {
            different = false;
         } else {
            different = true;
         }
      }
      if (different === true) {
         differentGeese.push(allGeese[i]);
      }
   }
   return differentGeese.join(",  ");
}
console.log("In our republic we don't have such geese Iteration: " + findDifferentGeeseIteration(allGeese, myGeese));
console.log("----------------------------------------------------------------------------------------------------------------------------------------");



