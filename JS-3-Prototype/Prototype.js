/* 
 PROTOTYPE INHERITANCE
- Saat kita membuat object dari constructor function, object tersebut disebut instance, semua property (baik itu value atau method), akan berada di dalam instance object nya
- Setiap kita membuat sebuah constructor function, maka secara otomatis akan dibuatkan prototype nya, misal ketika kita membuat constructor function Person, maka akan ada Person.prototype
- Saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari Constructor.prototype nya
- Untuk mengakses prototype milih sebuah instance, kita bisa menggunakan __proto__


*/

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, My name is ${this.firstName}`);
  };
}

const eko = new Person("Eko", "Khannedy");
const budi = new Person("Budi", "Nugraha");

console.log(eko);
