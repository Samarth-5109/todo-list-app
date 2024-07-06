const task = document.querySelector(".taskTextBox");
const addBtn = document.querySelector(".addTask");
const listContainer = document.querySelector(".listContainer");

addBtn.addEventListener("click", function clickHandler() {
  if (task.value === "") {
    alert("please type your goal!");
  } else {
    const li = document.createElement("li"); // create li element
    li.innerHTML = task.value; // wwhat to display
    listContainer.appendChild(li); // where to display, inside listcontainer.
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  task.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
