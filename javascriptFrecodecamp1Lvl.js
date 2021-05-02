// Palindrome CheckerPassed

function palindrome(str) {
   let str1 = str.match(/[a-zA-Z0-9]/g)
   let str2 = str.match(/[a-zA-Z0-9]/g)
   return str1.reverse().join('').toLowerCase() === str2.join('').toLowerCase()
 }
 
 //Roman Numeral ConverterPassed
 
 function convertToRoman(num) {
   return num;
  }
  
  convertToRoman(36);