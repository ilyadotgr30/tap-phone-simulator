
// Отображение времени
function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Добавляем ведущий ноль, если число меньше 10
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    // Вставляем время в элемент с id "current-time"
    document.getElementById("current-time").innerHTML = timeString;
}

// Обновляем время каждую секунду
setInterval(updateTime, 1000);

// Вызываем функцию один раз для установки начального времени
updateTime();

// Отображение даты
function updateDateTime() {
    var currentDateTime = new Date();

    // Форматируем время
    var timeString = currentDateTime.toLocaleTimeString('ru-RU');

    // Вставляем время в элемент с id "current-time"
    document.getElementById("current-time").innerHTML = timeString;

    // Форматируем дату
    var dateString = currentDateTime.toLocaleDateString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Вставляем дату в элемент с id "current-date"
    document.getElementById("current-date").innerHTML = dateString;
}

// Обновляем время и дату каждую секунду
setInterval(updateDateTime, 1000);

// Вызываем функцию один раз для установки начального времени и даты
updateDateTime();

// В файле index-script.js
function redirectToMenu() {
    window.location.href = '/menu';
}

function redirectToDealNumber() {
    window.location.href = '/deal-number'
}