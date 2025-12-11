function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement('li');
    li.textContent = taskText;

    taskList.appendChild(li)

    li.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) return;
        li.classList.toggle('completed');

    });

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}

// Allow pressing Enter to add task
document.getElementById('taskInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTask();
});