// const inputName = document.querySelector("#name-input");
// const outputName = document.querySelector("#name-output");

// inputName.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   outputName.textContent =
//     event.currentTarget.value !== "" ? event.currentTarget.value : "незнакомец";
// }
//Напиши скрипт который, при наборе
// текста в инпуте input#name-input
//  (событие input), подставляет его текущее значение в
//  span#name-output. Если инпут пустой, в спане должна
//   отображаться строка 'незнакомец'.
const refs = {
  inputLink: document.querySelector("#name-input"),
  spanLink: document.querySelector("#name-output"),
};
refs.inputLink.addEventListener("input", () => {
  const text = refs.inputLink.value;

  if (text === "") {
    refs.spanLink.textContent = "Незнакомец";
  } else {
    refs.spanLink.textContent = text;
  }
});
