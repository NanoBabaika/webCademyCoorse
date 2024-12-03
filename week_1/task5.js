// Задача №5

// Часть №1
let robotMaxim = {
    name: "Robot Maxim",
    dataCreation: 2022,
    country: "Япония",
    sayHi: function () {
        console.log(`Привет! Меня зовут ${this.name}`);
    },
    сountyDev: function () {
        console.log(`Меня произвели в стране: ${this.country}`);
    },
    sayAge: function(currentData) {
        let myAge = currentData - this.dataCreation;
        console.log(`Мой возраст на данный момент: ${myAge}`);
    }
}


robotMaxim.sayHi();
robotMaxim.сountyDev();
robotMaxim.sayAge(2024);



// Часть №2
function RobotConstructor (name, dataCreation, country) {
    this.name = name;
    this.dataCreation = dataCreation;
    this.country = country;
    this.sayHi =  function () {
        console.log(`Привет! Меня зовут ${this.name}`);
    };
    this.сountyDev = function () {
        console.log(`Меня произвели в стране: ${this.country}`);
    };
    this.sayAge = function(currentData) {
        let myAge = currentData - this.dataCreation;
        console.log(`Дата производстава: ${this.dataCreation}`);
        console.log(`Мой возраст на данный момент: ${myAge}`);
    };
}


let RoborMary = new RobotConstructor(
    "Robot Mary",
    2019,
    "Россия"
);


let RoborPhillip = new RobotConstructor(
    "Robot Phillip",
    2015,
    "США"
);

RoborMary.sayHi();
RoborMary.сountyDev();
RoborMary.sayAge(2024);


RoborPhillip.sayHi();
RoborPhillip.сountyDev();
RoborPhillip.sayAge(2024);