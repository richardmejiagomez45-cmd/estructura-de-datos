
const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskCounter = document.getElementById('taskCounter');


let tasksPending = 0;

function updateTaskCounter() {
    taskCounter.textContent = `Tareas pendientes: ${tasksPending}`;
}


function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
    tasksPending--;
    updateTaskCounter();
}


function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Por favor ingresa una tarea.");
        return;
    }

   
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

   
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', deleteTask);

    
    taskItem.appendChild(deleteButton);

    
    taskList.appendChild(taskItem);


    taskInput.value = "";

    tasksPending++;
    updateTaskCounter();
}


addButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});