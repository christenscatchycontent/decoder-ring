// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
if (!shift || shift === 0 || shift > 25 || shift < -25) {
return false;
}

    if (!encode) shift *= -1; ///lower case
let message = input.toLowerCase();
let final = ""; // final = message
for (let text = 0; text < message.length; text++) {
let letter = message[text];
  
if (letter.match(/[a-z]/)) {
let code = message.charCodeAt(text) + shift;
//shift letters
if (code > 122) {
code = code - 26;}
if (code < 97) {
code = code + 26;}

let newLetter = String.fromCharCode(code);
final += newLetter
} else {
final += letter}}
return final
  }
return { 
  caesar
};
})();

module.exports = { caesar: caesarModule.caesar };