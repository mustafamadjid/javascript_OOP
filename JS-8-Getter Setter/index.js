// Getter Setter akan berada di prototype bukan menempel di instance object

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter Function
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter Function
  set fullName(value) {
    let result = value.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

let eko = new Person("Eko", "Khannedy");
console.info(eko);

// Getter
console.info(eko.fullName);

// Setter
eko.fullName = "Budi Nugraha";
console.info(eko.fullName);
