const tasks = []

const addTaskBtn = document.getElementById("add-task-btn")
addTaskBtn.addEventListener("click", () => addTaskBtn())

function addTask() {
  const tasksNum = tasks.length
  tasks.push("")
  const taskRow = document.createElement("div")

  const text = document.createElement("input")
  text.type = "text"
  text.placeholder = "Schrijf jouw opdracht..."
  text.addEventListener("change", () => {
    tasks[tasksNum] = text.value
    console.log(tasks)
  })

  const deleteBtn = document.createElement("input")
  deleteBtn.type = "button"
  deleteBtn.value = "X"
  deleteBtn.addEventListener("click", () => {
    tasks.splice(taskNum, 1)
  })


  taskRow.appendChild(text)
  taskRow.appendChild(deleteBtn)

  const taskContainer = document.getElementById("task-container")
  taskContainer.appendChild(taskRow)
}