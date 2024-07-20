/* 
  Di dalam constructor kita bisa memanggil constructor lain, 
  dengan begitu kita bisa mewarisi semua property yang dibuat di constructor lain tersebut

  Lebih kepada hanya mengcopy property constructor lain

*/

function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.log(`Hello ${name}, My Name is ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  this.lastName = lastName;
  Employee.call(this, firstName);
}

let eko = new Manager("Rudi", "ahong");
console.info(eko);
eko.sayHello("lala");
