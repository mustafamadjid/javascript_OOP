/* 
  - Biasanya saat ingin menambahkan field (property berisi value), kita biasanya tambahkan di constructor
  - namun, pada ecmascript ada proposal yang mengajukan pembuatan public calss field ditempatakan diluar constructor
    selevel dengan penempatan method
  - hal ini belum final
*/

class Customer {
  // Public Field
  firstName;
  lastName;
  balance = 0;

  // Ini akan mengkases public field
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {}
}

let eko = new Customer("Eko", "khannedy");
console.info(eko);
