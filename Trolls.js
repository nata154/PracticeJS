'use strict'

const origPhrase = "This website is for losers LOL!";
const vowelsToDelete = "aeiouy";

console.log("removeVowelsAsArray---------------------------------------------------------------")
function removeVowelsAsArray(phrase, lettersToDelete) {
   let newLine = [""];
   var phrase = origPhrase.split("");
   var lettersToDelete = vowelsToDelete.split("");
   for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] !== "i") {
         if (phrase[i] !== "e") {
            if (phrase[i] !== "o") {
               if (phrase[i] !== "u") {
                  if (phrase[i] !== "y") {
                     newLine.push(phrase[i]);
                  }
               }
            }
         }
      }
   }
   return newLine.join("");
}
console.log(removeVowelsAsArray(origPhrase, vowelsToDelete));
console.log("---------------------------------------------------------------")

console.log("removeVowelsInString---------------------------------------------------------------")
function removeVowelsInString(phrase2, lettersToDelete) {
   var phrase2 = origPhrase;
   var lettersToDelete2 = lettersToDelete.split("");
   for (let i = 0; i < lettersToDelete2.length; i++) {
      var s = origPhrase.replace("o", "&").replace("i", "&");
      //var s2 = s.search(/[TL]/g, "#").replace(); //dont work, only searchs
      return s;
   }

}
console.log(removeVowelsInString(origPhrase, vowelsToDelete));
console.log("---------------------------------------------------------------")

console.log("phraseAsWords.map(x => x.replace(/[aeiouyAEIOUY]/g, '')---------------------------------------------------------------")
let phraseAsWords = origPhrase.split(" ");
var string = phraseAsWords.map(x => x.replace(/[aeiouyAEIOUY]/g, ''));
console.log(string);
console.log("---------------------------------------------------------------")

console.log("origPhrase.replace(o  & )---------------------------------------------------------------")
//var str = origPhrase.search(/[aeiouyAEIOUY]/g).replace('');  don't work cause it is string
//console.log(str);
var s = origPhrase.replace("o", "&");
console.log(s);
console.log("---------------------------------------------------------------")


