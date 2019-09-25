'use strict'

let originalPhrase = "Hello from the other side I must've called a thousand times to tell you I'm sorry for everything that I've done but when I call you never seem to be home";

let phraseAsArray = originalPhrase.split(" ");
let reversedWordsArray = phraseAsArray.map(phraseAsArray => phraseAsArray.split("").reverse().join(""));
let sortAfterReverse = reversedWordsArray.sort();
let reverseAfterReversingOrdered = sortAfterReverse.map(sortAfterReverse => sortAfterReverse.split("").reverse().join(""));



console.log(reverseAfterReversingOrdered.join(", "));


console.log("dont want to exlore this ----------")
let sortedArray = function (phraseAsArray) {
   let convertedArray = phraseAsArray;
   for (let i = convertedArray.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
         if (findLastLetter(convertedArray[j]) == findLastLetter(convertedArray[j + 1])) {
         }
         else {
            if (findLastLetter(convertedArray[j]) > findLastLetter(convertedArray[j + 1])) {
               let temp = convertedArray[j];
               convertedArray[j] = convertedArray[j + 1];
               convertedArray[j + 1] = temp;
            }
         }
      }

   }
}
function findLastLetter(elementOfArray) {
   let lastIndexLetter = elementOfArray.length;
   return elementOfArray[lastIndexLetter];
}

function findFirstLetter(elementOfArray) {
   let splitedWord = elementOfArray.split("");
   return splitedWord[0];
}