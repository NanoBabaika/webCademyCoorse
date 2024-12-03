console.log('lets code! {^_^}');
// Переменная для работы с кнопкой
let btnTheme = document.querySelector('.night-mode-btn');
// Переменная для работы с body
let bodyPage = document.querySelector('body');

// функция по клику
btnTheme.addEventListener('click', darkTheme);


function darkTheme () {
    // Добавляем убираем класс active
    btnTheme.classList.toggle('active');
  
    // Если есть класс active то добавляем в body класс night 
    // Если класс отсутствует убираем класс
    // Меняем текстовое содержимое кнопки в зависимости от наличия класса active
    if(btnTheme.classList.contains('active')) {
        btnTheme.textContent = 'Выключить ночной режим';
        console.log('Work!');
        bodyPage.classList.add('night');
    } else {
        btnTheme.textContent = 'Включить ночной режим';
        bodyPage.classList.remove('night');
    }
}



 