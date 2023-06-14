const hourElem = document.querySelector('.hour');
const minuteElem = document.querySelector('.minute');
const secondElem = document.querySelector('.second');
const millisecondElem = document.querySelector('.millisecond');

const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const resButton = document.querySelector('.new');

startButton.addEventListener('click', function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

pauseButton.addEventListener('click', function() {
    clearInterval(interval);
});

stopButton.addEventListener('click', function() {
    clearInterval(interval);
    clearFields();
    disabledBtn();
});

resButton.addEventListener('click', function() {
    clearInterval(interval);
    counter++;
    const result = document.querySelector('.result');
    const block = document.createElement('div');
    block.innerText = `Result ${counter}: ${hour}:${minute}:${second}:${millisecond}`;
    block.style.paddingBottom = 2 + 'px';
    block.style.paddingTop = 2 + 'px';
    result.append(block);

});

let hour = '00';
let minute = 00;
let second = '00';
let millisecond = '00';
let interval;
let counter = 0;
let disabled = true;


function startTimer() {
    millisecond++;
    if (millisecond < 9) {
        millisecondElem.innerText = '0' + millisecond;
    };
    if (millisecond > 9) {
        millisecondElem.innerText = millisecond;
    };
    if (millisecond > 99) {
        second++;
        secondElem.innerText = '0' + second;
        millisecond = 0;
        millisecondElem.innerText = '0' + millisecond;
    };

    if (second < 9) {
        secondElem.innerText = '0' + second;

    }
    if (second > 9) {
        secondElem.innerText = second;
    }

    if (second > 59) {
        minute++;
        minuteElem.innerText = '0' + minute;
        second = 0;
        secondElem.innerText = '0' + second;
    }

    if (minute < 9) {
        minuteElem.innerText = '0' + minute;

    }
    if (minute > 9) {
        minuteElem.innerText = minute;
    }
    if (minute > 59) {
        hour++;
        hourElem.innerText = '0' + hour;
        minute = 0;
        minuteElem.innerText = '0' + minute;
    }
    resButton.disabled = false;
};

function clearFields() {
    hour = '00';
    minute = '00';
    second = '00';
    millisecond = '00';
    interval;

    hourElem.textContent = '00';
    secondElem.textContent = '00';
    minuteElem.textContent = '00';
    millisecondElem.textContent = '00';

};

function disabledBtn() {
    if (disabled) {
        resButton.disabled = true;
    }
};

disabledBtn();