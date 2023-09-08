const blueButton = document.getElementById("changeblue");
const greenButton = document.getElementById("changegreen");

blueButton.addEventListener("click", function () {
    changeTextColor(blueButton.getAttribute("data-color"));
});

greenButton.addEventListener("click", function () {
    changeTextColor(greenButton.getAttribute("data-color"));
});

function changeTextColor(color) {
    const textToChange = document.getElementById("textToChange");
    textToChange.style.color = color;
}
