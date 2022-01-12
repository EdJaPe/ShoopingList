var input = document.getElementById("input");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
/********created buttons**********/
var delButton = document.createElement("button");
delButton.setAttribute("class", "delete");
delButton.innerText = "Delete";

var li = document.createElement("li");

function inputLength() {
  return input.value.length;
}
function createDeleteButton() {
  li.appendChild(delButton);
}
for (let i = 0; i < list.length; i++) {
  var closeButton = document.createElement("button");
  closeButton.setAttribute("class", "delete");
  closeButton.innerText = "Delete";
  list[i].appendChild(closeButton);
  closeButton.addEventListener("click", deleteLi);
}

//this function will delete the li
function deleteLi(event) {
  event.target.parentElement.remove();
}
function toggleDoneClick(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
}
function createListElement() {
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
    toggleDoneClick;
    createDeleteButton();
  }
}
function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
    createDeleteButton();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
ul.addEventListener("click", toggleDoneClick);
delButton.addEventListener("click", deleteLi);
