/*closures
a closure is an inner function that has access to outer functions variables - scope chain
a close has access to its variables, variables in outer function and its parameters 
and access to global variables

we create a closure by adding a function inside a function
*/


console.log("outside");
var add = function(){
    console.log("1outside");
    var sum = 0;
    console.log("1outside");
    return function(){
        console.log("2outside");
        return sum++;   //--- add = function(){}
    }
  
}
// console.log("outside");
// var counter = add();
// console.log("outside");
// console.log(counter());
// console.log("outside");
// console.log(counter());



function sum(a){            
    return function(b){
        return a+b;
    }
}


// console.log(sum(1)(2));
// console.log(sum(1)(3));


/* .. your code for inBetween and inArray */

function inBetween(a,b){
    return function(x){
        x
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

