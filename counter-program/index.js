const decreaseBtn = document.getElementById("decreaseBtn");
const reseteBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let counter = 0;

increaseBtn.onclick = function() {
    counter++;
    countLabel.textContent = counter;
}
reseteBtn.onclick = function() {
    counter = 0;
    countLabel.textContent = counter;
}
decreaseBtn.onclick = function() {
    counter--;
    countLabel.textContent = counter;
}