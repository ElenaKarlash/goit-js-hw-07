const input = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

input.addEventListener("onscroll", changeScroll);
function changeScroll(event) {
  console.log(event.currentTarget.value);
}
console.log(onscroll);
//Что должна делать твоя функция.
//Она просто должна достучаться
// до style fontSize твоего текста и
//записать currentTarget.value самого инпута в
//значение fontSize
