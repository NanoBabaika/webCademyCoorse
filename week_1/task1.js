let markHeight = 1.8;
let markWeight = 80;
let imtMark = markWeight / markHeight ** 2;
console.log(imtMark);

let bobHeight = 1.8;
let bobWeight = 74;
let imtBob = bobWeight / bobHeight ** 2;
console.log(imtBob);

const whoFat = imtBob > imtMark;
console.log("ИМТ у Боба больше чем Марка ? Результат:" + whoFat);