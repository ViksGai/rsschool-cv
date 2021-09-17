let burger = document.querySelector('.burger__icon');
let menu = document.querySelector('.menu');



    burger.addEventListener('click', toggle);
    function toggle (){
        menu.classList.toggle('open');
        burger.classList.toggle('open');
};


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

console.log('вёрстка валидная +10', 'вёрстка семантическая +16,css-стили +10, контент размещается в блоке +10, вёрстка адаптивная +10,есть адаптивное бургер-меню +10,присутствует изображение  +10,контакты и навыки оформлены в виде списка ul > li +10,CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10, CV выполнено на английском языке +10, выполнены требования к Pull Request +10, есть видеорезюме автора CV на английском языке +10, дизайн, оформление, качество выполнения CV +10');