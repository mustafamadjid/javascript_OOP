class Employee {
  sayHello(name) {
    console.info(`Hi ${name}, my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  // sayHello(name) {
  //   console.info(`Hi ${name}, my name is manager ${this.name}`);
  // }
}

let budi = new Employee();
budi.name = "Budi";
budi.sayHello("Joko");

let eko = new Manager();
eko.name = "Eko";
eko.sayHello("Jordi");
