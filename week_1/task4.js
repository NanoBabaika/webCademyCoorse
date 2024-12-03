//Задача 4  Массивы и циклы


// Задача 1
let books = ["Властелин колец", "Идиот", "Педагогическая поэма", "Упырь", "Восстание персеполиса"];

for(let i = 0; i < books.length; i++){
	console.log(`Книга ${books[i]} с индексом ${i} (цикл For)`);

}

books.forEach(function(book, index) {
	console.log(`Книга ${book} с индексом ${index} (forEach)`);
});


// Задача 2
let array1 = ["Вишня", "Груша", "Яблоко", "Ананас", "Персик"];
array1.unshift("Капуста");
array1.push("Огурец", "Помидор");
let array2 = array1.slice(2, 6);
console.log("Содержимое обоих массивов");
console.log(array1);
console.log(array2);

