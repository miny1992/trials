//class
////class is not part of javascript hoisting
//we cannot redeclare a class. but we can redeclare a class expression :

var emp = class {  
    constructor(id, name) {  
      this.id = id;  
      this.name = name;  
    }  
  };  

  //named class expression 

  var emp = class Employee{  
    constructor(id, name) {  
      this.id = id;  
      this.name = name;  
    }  
  };  

  //used with the variable emp and not Employee
