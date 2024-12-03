// #результат игры между двумя командами

let teamMarkScore = 110 + 120 +130;
console.log("Общее количество очков команды Марка:" + teamMarkScore);
let teamPoleScore = 90 + 130 +135;
console.log("Общее количество очков команды Пола:" + teamPoleScore);

//Сравнение для двух команд
if (teamMarkScore > teamPoleScore){
	console.log("Команда Марка победила.")
} else if(teamPoleScore > teamMarkScore) {
	console.log("Команда Пола победила.")
} else if (teamPoleScore === teamMarkScore) {
	console.log("Ничья.Силы команд равны")
}

let teamMaryScore = 80 + 130 +150;
console.log("Общее количество очков команды Мэри:" + teamMaryScore);


//Сравнение для трех команд
if (teamMarkScore > teamPoleScore && teamMarkScore > teamMaryScore){
	console.log("Команда Марка победила.");
} else if (teamPoleScore > teamMarkScore && teamPoleScore > teamMaryScore){
	console.log("Команда Пола победила.");
} else if (teamMaryScore > teamMarkScore && teamMaryScore > teamPoleScore){
	console.log("Команда Мэри победила.");
} else if (teamMaryScore === teamMarkScore && teamMarkScore === teamPoleScore){
	console.log("Ничья.Силы всех трех команд равны");
} else if (teamMaryScore === teamMarkScore || teamMarkScore > teamPoleScore){
	console.log("Ничья между командами Мэри и Пола. Команда Пола проиграла.");
} else if (teamPoleScore === teamMarkScore || teamMarkScore > teamMaryScore){
	console.log("Ничья между командами Марка и Пола. Команда Мэри проиграла.");
} else if (teamPoleScore === teamMaryScore || teamPoleScore > teamMarkScore ){
	console.log("Ничья между командами Мэри и Пола. Команда Марка проиграла.");
}

