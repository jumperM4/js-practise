let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.className = "listItem";
  li.appendChild(document.createTextNode(input.value));
  li.addEventListener("click", toggleDone);
  ul.appendChild(li);
  input.value = "";

  let buttonDelete = document.createElement("button");
  buttonDelete.innerText = "Delete";
  buttonDelete.className = "delBtn";
  buttonDelete.addEventListener("click", deleteItem);
  li.append(buttonDelete);

  function toggleDone() {
    li.classList.toggle("done");
  }

  function deleteItem() {
    li.remove();
  }
}

function addListItemAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListItemAfterPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListItemAfterClick);
input.addEventListener("keypress", addListItemAfterPress);
