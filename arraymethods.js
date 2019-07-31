var cars = ["i10", "Volvo", "BMW"];
var names=['miny','edwin','vincent','fsdfsdfs','gdfgdfgd'];
var numbers=[1,2,3,4];
var num2 = [12,23,13,34];
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
var fruits3=fruits2;

 //1. concat

var concatArray = cars.concat(numbers);
var concat2 = numbers.concat(num2);
//console.log(typeof concatArray[0]); 

// 2. copywithin (position copied to, position copied from) (3,0) --> copied to 3 from position 0--> modifies same array

//names.copyWithin(3,0);  
//console.log(names);

//2.1 fill 
//var x = names.fill("Hi ",0,2)
 //console.log(x);  // --> replace elements with specific value . if no numbers specified, whole array filled. changes original array


//3.entries  --- returns the whole abject as an iterator

for(x of num2){
    //console.log(x);   ---> iterating over an array
}

//with entries
var f = names.entries();
for(x of f){
    console.log(x[0] +  x[1]); //--> returns an array with an index attached to it. 0th position will contain the idex, 1 the value
}

//3.1 keys - get keys only  of array. not supported by IE11. the keys are returned as an iterator
var keys = names.keys();
// for ( key of keys) {
//         console.log (key);
// }

//4.every  --- > checkes if every value passes the condition. returns true if it does else false   ----A1------

// console.log(numbers.every((num)=>num>2));  //--> false
// console.log(numbers.every((num)=>num>0)); //--> true

//4.1 some - checks if something pass test ----A2-------
console.log("any fruits have length more than 5: "+fruits2.some((element)=> element.length > 5));



//5. filter - takes an function which returns a check. filters values whose check is true. returns all values whose check function is true
var x = numbers.filter((num)=>num>2);
//console.log(x);

//5.1 find - takes a function and return first element whr check is true
var y = numbers.find((num)=>num>2);
//console.log(y);

//5.2 findIndex  - takes a function and return index of first element whr check is true
var z = num2.findIndex((num)=>num>20);
//console.log(z);


//6. forEach -  iterates thru array and applies function , other two parameters are optional. can change original array
//names.forEach((item,indexOfEach,originalArray)=>{originalArray[indexOfEach] = item+2});
//console.log(names);

var sum=0;
numbers.forEach((item)=>{sum+=item});
//console.log(sum);

//6.1 map - returns a new array calling afunction on the array element.
var newarray=numbers.map((num)=>num*2);
console.log(`new array from map function: ${newarray}`);


//7. from - create array from string. takes an optional second parameter which is function to apply on each created element

var newArr = Array.from("12345",(element)=>{return element+"miny"});
//console.log(newArr);

//7.1 split (string method actually). same as from. but we can mention delimiter based on which split is done.it returns the array with ","
var str = "How are you doing today?";
console.log("string converted to array: "+str.split(" "));

//7.1 toString - coverts to string from array. no separator can b mentioned like in join. , is put as the separator
console.log("fruits array to string: "+fruits3.toString());

//7.2 join - join array eleemts to form string
var newstring = ['i','am','a','woman'];
console.log(newstring.join(" "));


//8. includes - checkes if an element is thr
console.log(names.includes("miny"));

//8.1 indexOf - checkes if an element is thr. returns index
console.log(names.indexOf("miny"));

//8.2 lastIndexOf  -- same as indexOf, returns last occurence
console.log("edwin index position:"+names.lastIndexOf('edwin'));


//9. isArray
var numx=0;
console.log("is Array:"+Array.isArray(numx));


//10. length 
console.log(names.length);

//11. prototype - OO concept. we can create a custom array method using this and use it
//create a method to change to uppercase
Array.prototype.Ucase = function(){
    var arr = this.map((item)=>item.toUpperCase());
    return arr;
}
console.log(`array elements converted to uppercase with new prototype method: ${fruits2.Ucase()}`);



//12.pop - removes last element and returns. changes the original array
console.log(`last fruit: ${fruits.pop()}`);
console.log(fruits);

//12.1 push - add to end of array

fruits2.push("kiwi");
console.log(fruits2);

//12.2 shift - removes first element of array. modifies array. returns removed element
var numbers1 = [175, 50, 25];
console.log("first element remvoed: "+numbers1.shift());


//12.3 unshift - add 2 first elelemnt. modifies array. return new length
console.log("first element added: "+numbers1.unshift(25));
console.log(numbers1);

//13.reduce  --

var numbers1 = [175, 50, 25];
var val = numbers1.reduce((prev,curr)=>{return prev-curr})
console.log("subracted from left to right using reduce function: "+val);

//13.1 reduceRight  -- from right

var numbers1 = [175, 50, 25];
var val = numbers1.reduceRight((prev,curr)=>{return curr-prev})
console.log("subracted from  right to left using reduce function: "+val);

//14.reverse - changes the original array
console.log("reversed :"+numbers1.reverse());



//15. slice - returns selected elements (slice) as new object. original not changed. includes start, excludes end
console.log("sliced array from 2-4: "+fruits2.slice(1,3));
console.log(fruits2);
//15.1 splice : adds or removes a slice to/from array
//adding to array: adds to exisiting array. doesnt return anything

fruits3.splice(2,0,'Sapota','Avocado')
console.log("original array with added items:  "+fruits3); 

//removing from array -  removes from existing array. returns removed items
console.log("fruit slice removed from array:  "+ fruits3.splice(2,2));
console.log(fruits3);

//slice also removes and returns removed items as array. but original array is not modified. splice modifies original array


//16.sort - changes original array

console.log("soreted fruits array: "+ fruits3.sort());
//sorting using compare function

compareFunction = function(a,b){
return a.length - b.length
}
console.log("sort by assending length of string: "+fruits3.sort(compareFunction));
console.log("fruits3 is just a reference of fruits2. it is the same object. objects are mutable: so fruits2 array = "+fruits2);









