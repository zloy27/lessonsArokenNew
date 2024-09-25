const swiper = new Swiper('.swiper', {
    // Настройки Swiper
    loop: true, // Бесконечная прокрутка
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Делает пагинацию кликабельной
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//dropdown для header

const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownButton.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
});

// Закрываем раскрывающееся меню, если пользователь щелкнет за его пределами.
window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropdown-button")) {
        dropdownMenu.classList.remove("show");
    }
});



//dropdown2 для header

const dropdownButton2 = document.querySelector(".dropdown-button2");
const dropdownMenu2 = document.querySelector(".dropdown-menu2");

dropdownButton2.addEventListener("click", function () {
    dropdownMenu2.classList.toggle("show");
});

// Закрываем раскрывающееся меню, если пользователь щелкнет за его пределами.
window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropdown-button2")) {
        dropdownMenu2.classList.remove("show");
    }
});

//смотреть еще
const img = document.querySelector('#img__watch-more')
    const item = document.getElementById('shell')
    document.getElementById('button__watch-more').addEventListener('click', () => {
    if(img.attributes.src.textContent == "./icons/cancel.svg"){
        img.src = "./icons/more.svg";
        item.style.display = 'flex';
    }
    else{
        img.src = "./icons/cancel.svg";
        item.style.display = 'none';
    }
    })






//аккардеон
const boxes = Array.from(document.querySelectorAll(".box")); // считываем все элементы аккордеона в массив

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});

function boxHandler(e) {
    e.preventDefault(); // сбрасываем стандартное поведение
    let currentBox = e.target.closest(".box"); // определяем текущий бокс
    let currentContent = e.target.nextElementSibling; // находим скрытый контент
    currentBox.classList.toggle("active"); // присваиваем ему активный класс
    if (currentBox.classList.contains("active")) {
        // если класс активный ..
        currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
    } else {
        // в противном случае
        currentContent.style.maxHeight = 0; // скрываем контент
    }
}
