

let robot = {
    name: "Maxim",
        startEnergy: 100,
        // Текущий заряд
        currentCarge: 100,
        // действия
        actions: [
            "Уборка",
            "Завтрак",
            "Обед",
            "Ужин",
            "Покупки",     
        ],
         
        // Выполнение команды
        makeAction: function (currentAction) {     
            // переменные которые хранят данные по стоимости действия       
            let cleanCargePrice = 20; 
            let breakfestCargePrice = 5; 
            let lunchCargePrice = 15; 
            let dinnerCargePrice = 10; 
            let shoppingCargePrice = 60; 

            
            // Пустая переменная найденое действие 
            let findedAction = '';

            // проходимся циклом по массиву с действиями и находим соответствие , если соответствие найдено присваиваем его переменной findedAction
            for (let action of robot.actions) {
                if (action === currentAction) {
                    findedAction = action; 
                }  
            } 
 
 
            // В зависимости от найденой команды выполняем действие. Перед выполнением проверяем, достаточно ли заряда для выполнения.
            switch (findedAction) {
                case "Уборка": 
                    if ( this.currentCarge  <= cleanCargePrice) {
                    console.log(`Не могу выполнить действие ${findedAction}. Необходимо ${cleanCargePrice}% заряда, осталось ${this.currentCarge}%.`)
                    return;
                    }
                     else {
                        console.log(`Выполнено  действие ${findedAction}`);
                        this.currentCarge = this.currentCarge - cleanCargePrice;
                        console.log(`Текущий заряд равен ${this.currentCarge}%`);
                        break;
                    }
                case "Завтрак":
                    if ( this.currentCarge  <= breakfestCargePrice) {
                        console.log(`Не могу выполнить действие ${findedAction}. Необходимо ${breakfestCargePrice}% заряда, осталось ${this.currentCarge}%.`)
                        return;
                    } else {
                        console.log(`Выполнено  действие ${findedAction}`);
                        this.currentCarge = this.currentCarge - breakfestCargePrice;
                        console.log(`Текущий заряд равен ${this.currentCarge} %`);
                        break;    
                    }
                 case "Обед":
                    if ( this.currentCarge  <= lunchCargePrice) {
                        console.log(`Не могу выполнить действие ${findedAction}. Необходимо ${lunchCargePrice}% заряда, осталось ${this.currentCarge}%.`)
                        return;
                    } else {
                        console.log(`Выполнено  действие ${findedAction}`);
                        this.currentCarge = this.currentCarge - lunchCargePrice;
                        console.log(`Текущий заряд равен ${this.currentCarge} %`);
                        break;    
                    }
                 case "Ужин":
                    if ( this.currentCarge  <= dinnerCargePrice) {
                        console.log(`Не могу выполнить действие ${findedAction}. Необходимо ${dinnerCargePrice}% заряда,  осталось ${this.currentCarge}%.`)
                        return;
                    } else {
                        console.log(`Выполнено  действие ${findedAction}`);
                        this.currentCarge = this.currentCarge - dinnerCargePrice;
                        console.log(`Текущий заряд равен ${this.currentCarge}%`);
                        break;    
                    }
                  case "Покупки":
                    if ( this.currentCarge  <= shoppingCargePrice) {
                        console.log(`Не могу выполнить действие ${findedAction}. Необходимо ${shoppingCargePrice}% заряда, осталось ${this.currentCarge}%.`)
                        return;
                    } else {
                        console.log(`Выполнено действие ${findedAction}`);
                        this.currentCarge = this.currentCarge - shoppingCargePrice;
                        console.log(`Текущий заряд равен ${this.currentCarge}%`);
                        break;    
                    }
                 default: 
                     // Если команда не найдена выводим данное сообщение
                    console.log(`В базе данных не существует команды: "${currentAction}"`);
                    break;
             }

        },

        
        // Метод для восполнения заряда
        carge: function () {
            console.log("Восполняю заряд батареи....")
            this.currentCarge = 100;
            console.log(`Зарядка завершана. Уровень энергии ${this.currentCarge}%`);    
        }
    }
    


    robot.makeAction("Уборка");
    robot.makeAction("Завтрак");
    robot.makeAction("Обед");
    robot.makeAction("Ужин");
    robot.makeAction("Покупки");
    robot.makeAction("Фигня");
    robot.carge();
    robot.makeAction("Покупки");
    robot.makeAction("Уборка");
