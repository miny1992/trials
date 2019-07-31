var a = new Date();
console.log(a);

/**
 * 1.getting date:
 * getDate , getDay, getMonth , getFullYear , getHours , getMinutes
 * getSeconds , getMilliseconds , getTime
 *
 * getUTCDate .... etc
 */

 console.log(a.getDate());
 console.log(a.getDay());  //- returns number of week
 console.log(a.getMonth());
 console.log(a.getFullYear());
 console.log(a.getHours());
 console.log(a.getMinutes());
 console.log(a.getSeconds());
 console.log(a.getMilliseconds());
 console.log(a.getTime());  // -- milli secodns from 1970/1/1

 /**
 * 1.setting date:
 * setDate 1-31 , setMonth 0-11 , setFullYear , setHours 0-23 , 
 * setMinutes 0-59
 * setSeconds 0-59 , setMilliseconds 0-999 , 
 * setTime subtract or add milliseconds from 1970/1/1 and display
 *
 * getUTCDate .... etc
 */

console.log("setting");
a.setDate(20);console.log(a);
a.setMonth(4);console.log(a);

/**
 * 3.now parse
 */
console.log("---return miliseconds from past --"); 
console.log(Date.now());  //- miliseconds from 1970/1/1 to now
console.log(Date.parse("March 21, 2012"));  //- miliseconds from  1970/1/1 to mentioned date

/**
 * datestring tostring totimestring tojson
 */
console.log("------date to readable frmat------");
console.log(a.toDateString());
console.log(a.toString());
console.log(a.toTimeString());
console.log(a.toJSON());
console.log(a.valueOf()); //-- milliseconds from 1970/1/1 from midnight
console.log(Date.now());  //-- similar

