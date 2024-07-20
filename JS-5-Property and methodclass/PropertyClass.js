class Person {
  constructor(name) {
    this.name = name;
  }

  // Saat membuat function di luar constructor, maka function menempel pada prototype bukan pada instance object nya
  sayHello(name) {
    console.info(`Hi ${name}, my name is ${this.name}`);
  }
}

const mustafa = new Person("mustafa");
console.log(mustafa.name);

// Call method
mustafa.sayHello("Rudi");
