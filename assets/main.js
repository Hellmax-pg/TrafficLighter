const timeGreenSec = 10, // Время Зелёного света в сек 
      timeRedSec = 10; // Время Красного света в сек

// Переводим заданное время в секундах в миллисекунды
const timeGreenInterval = timeGreenSec * 1000,
      timeYellowInterval = (timeGreenSec * 1000) + 3000,
      timeRedInterval = timeRedSec * 1000;
      
// Объявляем переменные изменения цвета на табло
const greenScoreGreen = $('.green').css('background-color', 'green'),
      greenScoreGrey = $('.green').css('background-color', 'grey'),
      yellowScoreYellow = $('.yellow').css('background-color', 'yellow'),
      yellowScoreGrey = $('.yellow').css('background-color', 'grey'),
      redScoreRed = $('.red').css('background-color', 'red'),
      redScoreGrey = $('.red').css('background-color', 'grey');

// Основная функция работы Светофора
traffic = function() {

    // Цикл зелёного табло
    if (greenScoreGrey) {
        setTimeout(function() {
            $('.green').css('background-color', 'green');
            // Вызываем функцию таймера на зелёном табло
            initGreen();
        });
    }
    if (greenScoreGreen) {
        setTimeout(function() {
            $('.green').css('background-color', 'grey');
        }, (timeGreenInterval - 3000));
    }
    if (greenScoreGrey) {
        setTimeout(function() {
            $('.green').css('background-color', 'green');
        }, (timeGreenInterval - 2500));
    }
    if (greenScoreGreen) {
        setTimeout(function() {
            $('.green').css('background-color', 'grey');
        }, (timeGreenInterval - 2000));
    }
    if (greenScoreGrey) {
        setTimeout(function() {
            $('.green').css('background-color', 'green');
        }, (timeGreenInterval - 1500));
    }
    if (greenScoreGreen) {
        setTimeout(function() {
            $('.green').css('background-color', 'grey');
        }, (timeGreenInterval - 1000));
    }
    if (greenScoreGrey) {
        setTimeout(function() {
            $('.green').css('background-color', 'green');
        }, (timeGreenInterval - 500));
    }
    if (greenScoreGreen) {
        setTimeout(function() {
            $('.green').css('background-color', 'grey');
        }, timeGreenInterval);
    }
    // Цикл жёлтого табло
    if (yellowScoreYellow) {
        setTimeout(function() {
            $('.yellow').css('background-color', 'grey');
        });
    }
    if (yellowScoreGrey) {
        setTimeout(function() {
            $('.yellow').css('background-color', 'yellow');
        }, (timeYellowInterval - 3000));
    }
    if (yellowScoreYellow) {
        setTimeout(function() {
            $('.yellow').css('background-color', 'grey');
        }, (timeYellowInterval));
    }
    if (yellowScoreGrey) {
        setTimeout(function() {
            $('.yellow').css('background-color', 'yellow');
        }, (timeRedInterval + timeYellowInterval - 3000));
    }
    // Цикл красного табло
    if (redScoreGrey) {
        setTimeout(function() {
            $('.red').css('background-color', 'red');
            // Вызываем функцию таймера на красном табло
            initRed();
        }, (timeYellowInterval));
    }
    if (redScoreRed) {
        setTimeout(function() {
            $('.red').css('background-color', 'grey');
        });
    }
};

// Инициализация времени на зелёном табло + интервал повтора
function initGreen() {
    secGreen = timeGreenSec;
    intervalTrafficGreen = setInterval(tickGreen, 1000);
}

// Инициализация времени на красном табло + интервал повтора
function initRed() {
    secRed = timeRedSec;
    intervalTrafficRed = setInterval(tickRed, 1000);
}

// Функция цикла таймера зелёного табло
function tickGreen() {
    secGreen--;
    $('.green-clock').text(secGreen);
    if (secGreen <= 0) {
        $('.green-clock').text('');
        clearInterval(intervalTrafficGreen);
    }
}

// Функция цикла таймера красного табло
function tickRed() {
    secRed--;
    $('.red-clock').text(secRed);
    if (secRed <= 0) {
        $('.red-clock').text('');
        clearInterval(intervalTrafficRed);
    }
}

// Первый вызов функции цикла работы светофора
traffic();

// Повторно вызываем ф-цию светофора и выставляем интервал 
// в зависимости от введенных выше данных
setInterval(function() {
    traffic();
}, (timeRedInterval + timeYellowInterval));