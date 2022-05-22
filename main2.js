const customButton = document.querySelector("button");
const customLabel = document.querySelector(".label");
const customText = document.querySelector("#counter");
const customInput = document.querySelector("input");

customLabel.classList.add("active");

function clickHandler() {
  customText.innerText = parseInt(customText.innerText) + 1;
}

function changeHandler(event) {
  console.log(event.target.value);
}

// 특정 태그에 이벤트를 추가할 수 있다. 첫번째 인자는 action, 두번째 인자는 handler
customButton.addEventListener("click", clickHandler);
customInput.addEventListener("change", changeHandler);
