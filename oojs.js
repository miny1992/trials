//object:

//object is a most important datatype. it is a reference data type. it stores a reference. primitive
//datatypes are stored as value

//an object property has 3 attributes. by default it is true.
//1. configurable attribute - can property b deleted or changed.
//2. enumerable : can property be returned in a for loop
//3.writable: whether property can be changes

//when a function is created, it has a prototype property which is a prototype object.
//this object cotnains a constructor property which points back to the function constructor

//when an object is created from constructor, the prototype object is shared with the objct

//inheritance = object being able to inherit properties and methods from parent object.

//encapsulation : enclosing all related functionalities of an object within tht object so that 
//it is hidden from rest of the application. encapsulating all specific functionalities in one obj


function inheritPrototype(childobject,parentobject){
    var dummy = Object.create(parentobject.prototype);
dummy.constructor = childobject;   ///----> overwriting the prototype loses the constructor. 
//so we need to assign the constructor to point back to the function.
childobject.prototype=dummy;
}


function person(name,age){
    this.name = name;
    this.age = age;

}

// when properties/methods added inside constructor to this, each new instance creates a separate copy of 
//these. when properties/methods are added to prototype, all objects share same properties/methods 
person.prototype.getDetails = function(){
    console.log(`name: ${this.name}\n age:${this.age}`);
};

function student(name,age,grade){
   person.call(this,name,age);
   this.grade=grade;
}

inheritPrototype(student,person);

student.prototype.getGrade=function(){
    console.log(`${this.name} is in Grade:${this.grade}`);
}

//to override inherited method:

student.prototype.getDetails = function(){
    console.log(`Student name: ${this.name}\n Student age:${this.age}`);
};

var student1 = new student('miny',12,10);
console.log(student1.getDetails());
console.log(student1.getGrade());

var displayDetails = student1.getDetails;
displayDetails();  //--> return undefined. we need to provide a context for this:
displayDetails.call(student1);
displayDetails.apply(student1);







