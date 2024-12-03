// #результат игры между двумя командами

// let teamMarkScore = 360;
// let teamPoleScore = 360;
// let teamMaryScore = 320;


// //Сравнение для трех команд
// function whoWin (teamMarkScore, teamPoleScore, teamMaryScore) {
//     if (teamMarkScore > teamPoleScore && teamMarkScore > teamMaryScore){
//         console.log("Команда Марка победила.");
//     } else if (teamPoleScore > teamMarkScore && teamPoleScore > teamMaryScore){
//         console.log("Команда Пола победила.");
//     } else if (teamMaryScore > teamMarkScore && teamMaryScore > teamPoleScore){
//         console.log("Команда Мэри победила.");
//     } else if (teamMaryScore === teamMarkScore && teamMarkScore === teamPoleScore){
//         console.log("Ничья.Силы всех трех команд равны");
//     } else if (teamMaryScore === teamMarkScore || teamMarkScore > teamPoleScore){
//         console.log("Ничья между командами Мэри и Пола. Команда Пола проиграла.");
//     } else if (teamPoleScore === teamMarkScore || teamMarkScore > teamMaryScore){
//         console.log("Ничья между командами Марка и Пола. Команда Мэри проиграла.");
//     } else if (teamPoleScore === teamMaryScore || teamPoleScore > teamMarkScore ){
//         console.log("Ничья между командами Мэри и Пола. Команда Марка проиграла.");
//     }
// }
 

// whoWin(teamMarkScore, teamPoleScore, teamMaryScore);


let age = 2022

 function sayAge() {
    console.log(`Что бы я назвал Вам свой возраст, подскажите какой сейчас год.`);
    let currentData = prompt('Какой сейчас год?', );
    let myAge = currentData - age;
    console.log(`Мой возраст на данный момент: ${myAge}`)   
}

let btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('click!');
    sayAge();
})




 