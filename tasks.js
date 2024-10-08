let tasks = [];

function insertTask(task) {
    if (!task.title) {
        console.log('Task title is required');
        return;
    }
    
    tasks.push({ title: task.title, completed: task.completed || false });
    console.log('Task inserted:', task);
    displayTasks(); 
}

insertTask({ title: 'Complete', completed: false });

function displayTasks() {
    console.log('Current tasks:', tasks);
}

// delete task
function deleteTask(taskTitle) {
    tasks = tasks.filter(task => task.title !== taskTitle);
    console.log(`Task "${taskTitle}" deleted.`);
    displayTasks(); 
}

deleteTask('Complete');
