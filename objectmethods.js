const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
var returnedVal = Object.assign(target,source);

console.log("the target object is modified: "+JSON.stringify(target) );
console.log("object.assign returns the chgnaed array also: "+ JSON.stringify(returnedVal) );


//Object.assign just copies values of object to another object. it is not a reference of the source object
//however, returned object is a reference to the target object

returnedVal.b = 20;
console.log("change to returnedval object changes the target object also"+ JSON.stringify(target));

const source1 = { b: 4, c: 5 };
const newObj = source1;
console.log("reference of source1 object created: "+JSON.stringify(newObj) );
newObj.b=45;
console.log("changes to reference object changes the source object too: "+JSON.stringify(source1) );


var arr1=['a','b','c']
var result = Object.assign({},arr1);
console.log("creating object from array using object.assing: "+ JSON.stringify(result));

//------------------------------------------------------------------------------------------------------------------
//object.values ----> converts an object to array. returns the values of object properties as array 
var a = {
    a:'something',
    b:'nothing'
}
var b = Object.values(a);
console.log("object values converted to array"+JSON.stringify(b));

//Object.keys-------- to get keys: 
console.log("object keys converted to array"+Object.keys(a));

//convert this object to array:

var crateArray = Object.keys(a).map((key)=>a[key]);
console.log(`crate array from object: ${crateArray}`)

//we can also create array out of each object key-value pair

var a1 = {
    a:'something',
    b:'nothing'
}
console.log("first pair: "+ Object.entries(a1)[0]); //a,something
console.log("second pair: "+ Object.entries(a1)[1]);


//--------------------------------------------------------------------------------------
// object.create - creates an object from an existing object

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten

  let obj={get x(){return 0}};  //--getter
console.log(obj)

//readonly property added to obj
Object.defineProperty(obj,"y",{value:0,writable:false})
console.log(obj.y)






