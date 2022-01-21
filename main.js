let defuser = document.getElementById('defuser');
let timer = document.getElementById('timer');
let timeId, count = 20;

timer.textContent = count;
timeId = setInterval(function() {
    if (count > 1) {
        count -= 1;
        timer.textContent = count;
    } else {
        timer.textContent = "BOOM";
    }
}, 1000)

function defuseBomb() {
    timer.textContent = "You did it";
    clearInterval(timeId);
}

function onKeyDown(e) {
    if (e.key === "Enter" && e.target.value === "defuse") {
        defuseBomb();
    }
}
defuser.addEventListener("keydown", onKeyDown);