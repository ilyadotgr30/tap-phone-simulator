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

// Основное меню
function redirectToPhoneBook() {
    window.location.href = '/menu/phone-book'
}

function redirectToCalls() {
    window.location.href = '/menu/calls'
}

function redirectToWorkWithInformation() {
    window.location.href = '/menu/work-with-information'
}

function redirectToService() {
    window.location.href = '/menu/service'
}

function redirectToNetworkSelection() {
    window.location.href = '/menu/network-selection'
}

function redirectToServiceMenu() {
    window.location.href = '/menu/service-menu'
}

// Служебное меню
function redirectToSettings() {
    window.location.href = '/menu/service-menu/settings'
}

function redirectToControl() {
    window.location.href = '/menu/service-menu/control'
}

function redirectToServiceWorkWithInformation() {
    window.location.href = '/menu/service-menu/work-with-information'
}

function redirectToSoftwareCheck() {
    window.location.href = '/menu/service-menu/software-check'
}

function redirectToCKH() {
    window.location.href = '/menu/service-menu/CKH'
}

function redirectToChangePIN() {
    window.location.href = '/menu/service-menu/change-pin'
}
