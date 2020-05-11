//всплывающий силует хедера при прокрутке экрана 
(function () {
    const header = document.querySelector('.header');/*обратились к элементу header*/
    /*зададим действие при скролинге*/
    window.onscroll = () => {
        if (window.pageYOffset > 150) {
            header.classList.add('header_active');/*при скроле больше 150 пикс
            , мы хедеру присваеваем класс, к которому заранее в сиесс написали стили*/
        } else {
            header.classList.remove('header_active');/*если условие не вып удаляем класс*/    
        }
    };
}());

//burger nav

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    //подвешиваем обработчик событий теперь на найденый эл-нт
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');//тут при клике добавили класс
    }); 
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');//тут убрали его
    });
    if (window.innerWidth < 768) {
        for ( i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav-active'); 
            });
        }
    }           
}());

// Scroll to anchors. Плавный скролл по странице.
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

