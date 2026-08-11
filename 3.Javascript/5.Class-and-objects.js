// class and Objects

class TataCar {
    constructor(brand,milage) {
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let Nexon = new TataCar("TOP Model",20.23);
console.log(Nexon.brand);


Inheritance

class Person {
    constructor() {
        console.log("I am human...!")
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {
    work() {
        console.log("work hard!");
    }
};

let Tejas = new Engineer("Computer");
