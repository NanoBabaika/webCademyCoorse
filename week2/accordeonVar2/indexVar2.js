// Находим все кнопки
let btns = document.querySelectorAll('.accordion');

// Проходим по коллекции циклом
btns.forEach(function (btn) {
    // вешает обработчик события
    btn.addEventListener ('click', function () {
        console.log('click');

        const contentBlock = btn.nextElementSibling;


        if(currentItem.classList.contains('active')) {
            currentItem.classList.remove('active');
            contentBlock.style.maxHeight = 0;

        } else {
            btns.forEach (function () {
                btn.classList.remove('active');
            })   
       
            let blocks = document.querySelectorAll('.content');

            blocks.forEach (function(block){
                block.style.maxHeight = 0;
            })

            btn.classList.add('active');

            contentBlock.style.maxHeight = contentBlock.scrollHeight + 'px';

        }
        
    }) 
}) 