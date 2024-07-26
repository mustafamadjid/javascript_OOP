class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithoutName() {
    console.info("Hello Person");
  }

  #sayWithName(name) {
    console.info(`Hello ${name}`);
  }
}

let person = new Person();
person.say();
