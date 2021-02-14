const URL = "https://jsonplaceholder.typicode.com/todos";

async function getTodos() {
  const response = await fetch(URL);
  try {
    const todos = await response.json();
    updateUI(todos);
  } catch (e) {
    console.log(e);
  }
}

function updateUI(todos) {
  const TODOS = document.getElementById("todos");
  for (let i = 0; i < todos.length; i++) {
    const { id, title } = todos[i];
    const li = document.createElement("li");
    li.textContent = `${id}: ${title}`;
    TODOS.appendChild(li);
  }
}

getTodos();
