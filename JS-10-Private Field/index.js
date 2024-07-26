/* 
  Private class field hanya bisa diakses di dalam kelas saja
*/

class Counter {
  #counter = 0;

  increment() {
    this.#counter++;
  }

  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

let counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.get());
console.info(counter);
