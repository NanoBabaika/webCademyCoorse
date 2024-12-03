// Находим все кнопки
let btns = document.querySelectorAll('.accordion');

// Проходим по коллекции циклом
btns.forEach(function (btn) {
    // вешает обработчик события
    btn.addEventListener ('click', function () {
        // добавляем класс активного элемента
        btn.classList.toggle('active');
        // находим ближайший блок с контентом
        const contentBlock = btn.nextElementSibling;

        // если есть класс active то добавляем стили с высотой
        if(btn.classList.contains('active')) {
            contentBlock.style.maxHeight = contentBlock.scrollHeight + 'px';
        } else {
            contentBlock.style.maxHeight = 0;
        }
        // в противном случае задаем высоту 0

        // Распечатка высоты блока в консоль
        console.log(contentBlock.scrollHeight);

         
    }) 
}) 