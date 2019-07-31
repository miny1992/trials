//string properties

//1.length
var firstname="minyvincent";
console.log(firstname.length)

//prototype - to add to the string prototype


//methods:

//1.character level:
/*
charAt
charCodeAt
fromCharCode - return charcode of character
*/ 
var firstname="minyvincent";
console.log(firstname.charAt(3));
console.log(firstname.charCodeAt(3));
console.log(String.fromCharCode(65));

//2.concat:
var firstname="minyvincent";
var lastname="minyvincent";
console.log(firstname.concat(lastname));

//3.checking is a string is present
/**
 *  1.if ends with
 * starts with
 * 2.includes()
 * 3.indexOF
 * lastIndexOF()
 * search()
*/
var a="this is a strisg string"
console.log(a.endsWith("string"));  //-- bool
console.log(a.endsWith("a")); //-- bool
console.log(a.startsWith("a")); //-- bool
console.log(a.includes("is")); //-- bool
console.log(a.indexOf("is")); //-- index  true even if part of a string word
console.log(a.lastIndexOf("is")); //-- index
console.log(a.search(/is/g)); //-- index   -- returns only first occurence index
console.log(a.match(/is/g)); //-- array of the occurence 
                             //number of times. here array of 3 'is'

//4.repeat
var name="miny";
console.log(name.repeat(3));

//5.replace
var name="miny vincent Vincent";
console.log(name.replace(/vincent/gi,"miny")); //--trimmed also

//6.split - converting to array
var name="miny is a girl";
console.log(name.split(" "));

//6.getting portion of string
/**
 * slice
 * substring - sme like slice. no -ve values
 * substr
 */
var name="miny is a girl";
console.log("slice substr sunstring")
console.log(name.slice(4,7));
console.log(name.slice(5,7));
console.log(name.slice(-5,-1));//from behind start count from 1. dont include second parameter
console.log(name.substring(5,3)); // which is lesser that is taken
 console.log(name.substr(5,7)); //all 7 cars included
 console.log(name.substr(-5,7));//counts from end starting with 1


 /**
  * 7.changing case
  * toUpperCase
  * toLowerCase
  */

 var name="miny is A girl";
 console.log("changing case")
 console.log(name.toUpperCase());
 console.log(name.toLowerCase());

 /**
  * 8.trim
  */
 
 var name="      miny is A girl            ";
 console.log("trimming")
 console.log(name);
 console.log(name.trim());
 console.log(name.length);