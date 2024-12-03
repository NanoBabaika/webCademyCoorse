

let robot = {
name: "Maxim",
    startEnergy: 100,
    // Текущий заряд
    currentCarge: 100,
    // действия
    clean: "Уборка",
    breakfest: "Завтрак",
    lunch:"Обед",
    dinner:"Ужин",
    shopping: "Покупки",
    
    // Выполнение команды
    makeAction: function (action) {
        if (action === "Уборка") { 
            console.log(`Выполняю действие ${this.clean}`);
            this.currentCarge = this.currentCarge - 20;
            console.log(`Текущий заряд равен ${this.currentCarge}`);
        } else if (action === "Завтрак") {
            console.log(`Выполняю действие ${this.breakfest}`);
            this.currentCarge = this.currentCarge - 5;
            console.log(`Текущий заряд равен ${this.currentCarge}`);    
        }  else if (action === "Обед") {
            console.log(`Выполняю действие ${this.lunch}`);
            this.currentCarge = this.currentCarge - 15;
            console.log(`Текущий заряд равен ${this.currentCarge}`);    
        } else if (action === "Ужин") {
            console.log(`Выполняю действие ${this.dinner}`);
            this.currentCarge = this.currentCarge - 10;
            console.log(`Текущий заряд равен ${this.currentCarge}`);    
        } else if (action === "Покупки") {
            console.log(`Выполняю действие ${this.shopping}`);
            this.currentCarge = this.currentCarge - 60;
            console.log(`Текущий заряд равен ${this.currentCarge}`);    
        } 
        // Добавить стандартное действие/типа неизвестная команда
    },

    carge: function () {
        console.log("Восполняю заряд батареи....")
        this.currentCarge = 100;
        console.log(`Текущий заряд равен ${this.currentCarge}`);    
    }
}

robot.makeAction("Уборка");

robot.makeAction("Покупки");

robot.carge();