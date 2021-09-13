const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputLength);

function onInputLength(event) {
  const inputLength = input.dataset.length;
  if (event.currentTarget.value.length === parseInt(inputLength, 10)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
