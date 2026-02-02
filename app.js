let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

render();

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") return;

  tasks.push({
    text: input.value,
    done: false
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  render();
}

function render() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    let span = document.createElement("span");
    span.textContent = task.text;

    if (task.done) {
      span.style.textDecoration = "line-through";
    }

    checkbox.onchange = () => {
      task.done = checkbox.checked;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      render();
    };

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      render();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}


