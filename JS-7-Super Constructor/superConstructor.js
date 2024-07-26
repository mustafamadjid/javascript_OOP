class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayHello(name) {
    console.info(`Hi ${name}, my name is Employee ${this.firstName}`);
  }
}

// class Manager akan memiliki semua property dari constructor Employee
class Manager extends Employee {
  sayHello(name) {
    console.info(`Hi ${name}, my name is manager ${this.firstName}`);
  }
}

// Ketika membuat constructor di child class, maka wajib memanggil constructor di parent class
class Staff extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
}

let budi = new Employee();

let eko = new Manager("Eko");
eko.sayHello("Jordi");
