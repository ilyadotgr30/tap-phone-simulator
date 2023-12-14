function goBack() {
    // Используйте window.history для перехода назад
    window.history.back();
}

function redirectToHomePage() {
    window.location.href = '/'
}

function redirectToMenu() {
    window.location.href = '/menu';
}

cancelButton.addEventListener('click', function() {
    // Получаем текущее значение поля ввода
    var inputValue = outputField.value;

    // Проверяем, что поле не пустое, прежде чем удалять символ
    if (inputValue.length > 0) {
        // Удаляем последний символ
        var newValue = inputValue.slice(0, -1);

        // Обновляем значение поля ввода
        outputField.value = newValue;
    }
});


var outputField = document.getElementById('number-input');
        var button1 = document.getElementById('1_button');

        // Добавляем обработчик события на кнопку
        button1.addEventListener('click', function() {
            // Получаем значение поля ввода
            var inputValue = outputField.value;
            // Записываем в поле
            outputField.value += '1';
        });
        var button2 = document.getElementById('2_button');

        // Добавляем обработчик события на кнопку
        button2.addEventListener('click', function() {
            // Получаем значение поля ввода
            var inputValue = outputField.value;
            // Записываем в поле
            outputField.value += '2';
        });

        var button3 = document.getElementById('3_button');

        // Добавляем обработчик события на кнопку
        button3.addEventListener('click', function() {
            // Получаем значение поля ввода
            var inputValue = outputField.value;
            // Записываем в поле
            outputField.value += '3';
        });

        var button4 = document.getElementById('4_button');

        // Добавляем обработчик события на кнопку
        button4.addEventListener('click', function() {
            // Получаем значение поля ввода
            var inputValue = outputField.value;
            // Записываем в поле
            outputField.value += '4';
        });

        var button5 = document.getElementById('5_button');

        // Добавляем обработчик события на кнопку
        button5.addEventListener('click', function() {
            // Получаем значение поля ввода
            var inputValue = outputField.value;
            // Записываем в поле
            outputField.value += '5';
        });

        var button6 = document.getElementById('6_button');

        // Добавляем обработчик события на кнопку
        button6.addEventListener('click', function() {
            // Получаем значение поля ввода
            var inputValue = outputField.value;
            // Записываем в поле
            outputField.value += '6';
        });

        var button7 = document.getElementById('7_button');

        // Добавляем обработчик события на кнопку
        button7.addEventListener('click', function() {
            // Получаем значение поля ввода
            var inputValue = outputField.value;
            // Записываем в поле
            outputField.value += '7';
        });

        var button8 = document.getElementById('8_button');

        // Добавляем обработчик события на кнопку
        button8.addEventListener('click', function() {
            // Получаем значение поля ввода
            var inputValue = outputField.value;
            // Записываем в поле
            outputField.value += '8';
        });

        var button9 = document.getElementById('9_button');

        // Добавляем обработчик события на кнопку
        button9.addEventListener('click', function() {
            // Получаем значение поля ввода
            var inputValue = outputField.value;
            // Записываем в поле
            outputField.value += '9';
        });

        var button0 = document.getElementById('0_button');

        // Добавляем обработчик события на кнопку
        button0.addEventListener('click', function() {
            // Получаем значение поля ввода
            var inputValue = outputField.value;
            // Записываем в поле
            outputField.value += '0';
        });



