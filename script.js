document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');


  addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      taskInput.value = '';
      taskInput.focus();
    }
  });

  
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") addBtn.click();
  });

  
  function addTask(text) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }
});