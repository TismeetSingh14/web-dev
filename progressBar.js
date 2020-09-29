const steps = [...document.querySelectorAll('.blts')];
const previousB = document.getElementById('previousB');
const endB = document.getElementById('endB');
const nextB = document.getElementById('nextB');

const MAX_STEPS = 4;
let stepPtr = 1;

previousB.addEventListener('click', () => {
    steps[stepPtr - 2].classList.remove('clear');
    stepPtr -= 1;
    nextB.disabled = false;
    endB.disabled = true;
    if (stepPtr === 1) {
        previousB.disabled = true;
    }
});

nextB.addEventListener('click', () => {
    steps[stepPtr - 1].classList.add('clear');
    stepPtr += 1;
    previousB.disabled = false;
    if (stepPtr === MAX_STEPS + 1) {
        nextB.disabled = true;
        endB.disabled = false;
    }
});

endB.addEventListener('click', () => {
    location.reload();
});

var i = 0;

function prev() {
    i -= 1
    if (i == 0) {
        var ele = document.getElementById("0w");
        ele.style.display = "block";
        var ele_ = document.getElementById("0r");
        ele_.style.display = "none";
    }
    else if (i == 1) {
        var ele = document.getElementById("1w");
        ele.style.display = "block";
        var ele_ = document.getElementById("1r");
        ele_.style.display = "none";
    }

    else if (i == 2) {
        var ele = document.getElementById("2w");
        ele.style.display = "block";
        var ele_ = document.getElementById("2r");
        ele_.style.display = "none";
    }

    else if (i == 3) {
        var ele = document.getElementById("3w");
        ele.style.display = "block";
        var ele_ = document.getElementById("3r");
        ele_.style.display = "none";
    }

    else {
        i = 0;
    }
}

function nex() {
    i += 1
    if (i == 1) {
        var ele = document.getElementById("0w");
        ele.style.display = "none";
        var ele_ = document.getElementById("0r");
        ele_.style.display = "block";
    }

    else if (i == 2) {
        var ele = document.getElementById("1w");
        ele.style.display = "none";
        var ele_ = document.getElementById("1r");
        ele_.style.display = "block";
    }

    else if (i == 3) {
        var ele = document.getElementById("2w");
        ele.style.display = "none";
        var ele_ = document.getElementById("2r");
        ele_.style.display = "block";
    }

    else if (i == 4) {
        var ele = document.getElementById("3w");
        ele.style.display = "none";
        var ele_ = document.getElementById("3r");
        ele_.style.display = "block";
    }


    else {
        i = 0;
    }
}

var k = 0;
function fill() {
    if (k == 0) {
        k = 1;
        var ele = document.getElementById("bar");
        var w = 4;
        var q = setInterval(frame, 30);
        function frame() {
            if (w >= 100) {
                clearInterval(q);
                k = 0;
            } else {
                w++;
                ele.style.width = w + "%";
                ele.innerHTML = w + "%";
            }
        }
    }
}