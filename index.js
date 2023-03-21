const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

function getInputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  li.className = "listItem";
  li.appendChild(document.createTextNode(input.value));
  li.addEventListener("click", () => li.classList.toggle("done"));
  ul.appendChild(li);
  input.value = "";

  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "Delete";
  buttonDelete.className = "delBtn";
  buttonDelete.addEventListener("click", () => li.remove());
  li.append(buttonDelete);

  // function toggleDone() {
  //   li.classList.toggle("done");
  // }

  // function deleteItem() {
  //   li.remove();
  // }
}

function addListItemAfterClick() {
  if (getInputLength() > 0) {
    createListElement();
  }
}

function addListItemAfterPress(event) {
  if (getInputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListItemAfterClick);
input.addEventListener("keypress", addListItemAfterPress);
