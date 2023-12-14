function goBack() {
    // Используйте window.history для перехода назад
    window.history.back();
}

document.addEventListener('DOMContentLoaded', function () {
    // Получаем элементы списка
    var buttonList = document.getElementById('button-list');
    var buttons = buttonList.getElementsByTagName('button');

    // Индекс текущей выделенной кнопки
    var selectedIndex = 0;

    // Обработчик для кнопки ▲
    document.querySelector('.left-right-button.up-down-button.up-button').addEventListener('click', function () {
        if (selectedIndex > 0) {
            buttons[selectedIndex].classList.remove('selected');
            selectedIndex--;
            buttons[selectedIndex].classList.add('selected');
        }
    });

    // Обработчик для кнопки ▼
    document.querySelector('.left-right-button.up-down-button.down-button').addEventListener('click', function () {
        if (selectedIndex < buttons.length - 1) {
            buttons[selectedIndex].classList.remove('selected');
            selectedIndex++;
            buttons[selectedIndex].classList.add('selected');
        }
    });

    // Обработчик для кнопки Ок
    document.querySelector('.ok-button').addEventListener('click', function () {
        // Ваш код обработки нажатия на кнопку Ок
        // Например, можно использовать buttons[selectedIndex] для выполнения действий с текущей выбранной кнопкой
        console.log('Выбрана кнопка:', buttons[selectedIndex].textContent);
        buttons[selectedIndex].click();
    });

    // Выделение первой кнопки при загрузке
    buttons[selectedIndex].classList.add('selected');
});

function redirectToDealNumber() {
    window.location.href = '/deal-number'
}