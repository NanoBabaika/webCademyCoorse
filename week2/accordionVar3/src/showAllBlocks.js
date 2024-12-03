console.log('lets code! {^_^}');

function accordion (selector, onlyOne = false) {
    const accordionWrapper = document.querySelector(selector);

    const accordionBtns = accordionWrapper.querySelectorAll('.accordion__btn');

    accordionBtns.forEach(function(btn) {
        if(onlyOne) {
            btn.addEventListener('click',  showOneBlock);
        } else {
            btn.addEventListener('click',  showContent);
        }
 

        function showContent(event) {
                event.preventDefault();
                 
                const currentItem = btn.closest('.accordion__item');

                const currentContent =  currentItem.querySelector('.accordion__content');

                currentItem.classList.toggle('active');

                if (currentItem.classList.contains('active')) {
                    currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
                } else {
                    currentContent.style.maxHeight = 0;
                }
        }

        function showOneBlock(event) {
            event.preventDefault();
            
            const currentItem = btn.closest('.accordion__item');

            const currentContent =  currentItem.querySelector('.accordion__content');

            if(currentItem.classList.contains('active')) {
                currentItem.classList.remove('active');
                currentContent.style.maxHeight = 0;
            } else {
                const accordionItems = accordionWrapper.querySelectorAll('accordion__item');

                accordionItems.forEach (function (item) {
                    item.classList.remove('active');
                })       
           
                const contentBlocks = accordionWrapper.querySelectorAll('.accordion__content');
                contentBlocks.forEach(function(block) {
                    block.style.maxHeight = 0;
                })

                currentItem.classList.add('active');

                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
            }
        }
    })
}


accordion('#accordion-1');
accordion('#accordion-2', true);


console.log('JS код. Один открытый блок. Кастомизация функции 8:30');