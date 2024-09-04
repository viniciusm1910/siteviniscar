let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let numberDisplay = indicator.querySelector('.number');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = active === firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active');

    updateIndicators();
};

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = active === lastPosition ? firstPosition : active + 1;
    items[active].classList.add('active');

    updateIndicators();
};

function updateIndicators() {
    // Atualizar os indicadores de navegação (pontos)
    indicator.querySelector('ul li.active').classList.remove('active');
    dots[active].classList.add('active');

    // Atualizar o número exibido
    numberDisplay.textContent = `0${active + 1}`;
}
