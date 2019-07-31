///call bind apply
/// these function methods calls a function with an object reference for 'this' and accepts arguments.
//the first argument is used to change the execution context of the function.

//1.apply.
//accepts an array like object as arguments
//object needs to be passed which is mandatory. if no this is required, pass null.

//return value will be the result of the function.

//if we want to do a functionality on an array of values, we can use apply

var namesArray=["miny","vincent","edwin","mary"];
//namesArray.toUpperCase();  //--> throws error.

var x= String.prototype.toUpperCase.apply(namesArray).split(",")
console.log(x);

var numbers = [1,2,3,4,5,6];
var val = Math.max.apply(numbers,numbers); 
console.log(val);

