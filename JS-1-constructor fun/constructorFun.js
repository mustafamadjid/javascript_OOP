/*

    Constructor Function -> cara lama javascript untuk membuat class

    pembuatan objek menggunakan keyword -> new

*/

// Dalam constructor function, huruf awal nama function harus kapital

function Person(firstName, lastName) {
  // Properties
  this.firstName = firstName;
  this.lastName = lastName;

  // Method
  this.sayHello = function (name) {
    console.info(`Hello ${name},my name is ${this.firstName}`);
  };
}

// Instantiating
let Budi = new Person();
Budi.firstName = "Budi";
Budi.lastName = "Aveiro";

let Dirman = new Person();
Dirman.lastName = "Lemitink";

let Rudi = new Person("Rudi", "Ahong");

console.log(Budi);
console.log(Dirman);
console.log(Rudi);

// Method Calling
Budi.sayHello("Sudiro");
