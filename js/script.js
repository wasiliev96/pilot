const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

const $moon = document.getElementById('moon');
const $sun = document.getElementById('sun');
// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseover', onMouseHover);
    $hoverables[i].addEventListener('mouseout', onMouseHoverOut);
}
var mouseX = 0,
    mouseY = 0;
var xp = 0,
    yp = 0;

// Move the cursor
function onMouseMove(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    $smallBall.style.left = mouseX + 'px';
    $smallBall.style.top = mouseY + 'px';
}
setInterval(function () {
    xp += ((mouseX - xp) / 6);
    yp += ((mouseY - yp) / 6);
    $bigBall.style.left = xp - 45 + 'px';
    $bigBall.style.top = yp - 45 + 'px';
}, 10);

function onMouseHover() {
    $bigBall.style.transform = 'scale(1.4)';
}

function onMouseHoverOut() {
    $bigBall.style.transform = 'scale(.4)';
}


// HELLO WORLD ANIMATION 
const phraselist = [
    "Привет, Мир!",
    "Совет: включитe инструменты разработчика, весь код прокомментирован",
    "Спасите",
];

let helloworld = document.getElementById('hello-world');
let letterPrintTime = 50;
let timePerPhrase = 5000;

function printMessage(input) {
    input = input.split('');
    helloworld.innerHTML = '<mark>$</mark>:';
    let i = 0;
    let messageInterval = setInterval(function () {
        helloworld.innerHTML += input[i];
        if (i >= input.length - 1) {
            i = 0;
            clearInterval(messageInterval);
            // setTimeout(phraseGame, 3000);
        }
        i++;
    }, letterPrintTime);
}

let lastRandom = null;

function phraseGame() {
    // const randomElement = phraselist[Math.floor(Math.random() * phraselist.length)];
    // printMessage(randomElement);

    // Наилучший вариант с использованием цикла
    phraselist.forEach(function (value, currentIndex) {
        setTimeout(function () {
            printMessage(value);
        }, timePerPhrase * currentIndex);
    });
}
phraseGame();
setInterval(phraseGame, timePerPhrase * (phraselist.length + 1));