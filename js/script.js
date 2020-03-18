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
}, 1);

function onMouseHover() { 
    $bigBall.style.transform = 'scale(2)';
}

function onMouseHoverOut() {
    $bigBall.style.transform = 'scale(1)';
}

function test() {
    document.documentElement.classList.toggle('dark');
    if ($sun.style.visibility == 'hidden') {
        $sun.style.visibility = 'visible';
        $moon.style.visibility = 'hidden';
    } else {
        $sun.style.visibility = 'hidden';
        $moon.style.visibility = 'visible';
    }
}