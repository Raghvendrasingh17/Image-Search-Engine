class Car {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello ";
    }
  }
  
  const myCar = new Car("Ford");
  console.log(Car.hello);