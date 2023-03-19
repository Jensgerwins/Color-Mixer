const redregler =document.querySelector("#range-red");
const greenregler =document.querySelector("#range-green");
const blueregler =document.querySelector("#range-blue");
const colorHex = document.querySelector("#color-hex");

function setColor() {
const redHexler = colorToHex(redregler.value);
const greenHexler = colorToHex(greenregler.value);
const blueHexler = colorToHex(blueregler.value);

const color = "#" + redHexler + greenHexler + blueHexler;
document.body.style.backgroundColor = color;
colorHex.innerText = color;

}
setColor();

function colorToHex(value) {
    value = Number.parseInt(value);
    return ("0" + value.toString(16)).substr(-2);
}

document.body.addEventListener("input",setColor);
