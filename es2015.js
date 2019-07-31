//arrow function

const getNum = () => 10;
let a = getNum();
//console.log(a);

//symbol: usually used for object property keys. they are either string or symbol.

let id = Symbol();
console.log(id); //--typeof = symbol
let idWithDescription = Symbol("id");
//console.log(idWithDescription.toString());  // to convert to string. does not autoconvert
console.log(idWithDescription.description); 
let user={name:"john"};
let uid = Symbol("user_id");
user[uid] = 1;
console.log(user);
//in object literal, symbol is inside square brackets, to differentiate from string. also we can have any 
//num of uid. fist need to define it always
let Uid = Symbol("uid");
user1={name:"miny",[Uid]:1}
console.log(user1)

//skipped in for in loop

for(let key in user1){
    console.log(`key: ${key}`); // --- no uid
}
console.log(Object.keys(user1)); // --- no uid

//if we want the exact property, we have to use the global symbol registry -- global symbols
let Globalid = Symbol.for("id");
console.log(Globalid);  // -- displays the symbol
let user2 = {name:"fsdf",[Globalid] : 1};
console.log(Symbol.keyFor(Globalid)); //-- displays the description of global symbol



