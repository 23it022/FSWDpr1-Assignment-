
let tasks = [];

const addTask = (title, status, priority) => {
    tasks.push({ title, status, priority });
    displayTasks(tasks);
};

const filterByStatus = (status) => {
    return tasks.filter(task => task.status === status);
};

const findHighPriorityTask = () => {
    return tasks.find(task => task.priority === 5);
};

const listTaskTitlesWithStatus = () => {
    return tasks.map(task => `Task: ${task.title}, Status: ${task.status}`);
};

const displayTasks = (taskArray) => {
    const taskListDiv = document.getElementById('taskList');
    taskListDiv.innerHTML = ''; // Clear previous tasks
    taskArray.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.textContent = `Title: ${task.title}, Status: ${task.status}, Priority: ${task.priority}`;
        taskListDiv.appendChild(taskItem);
    });
};

document.getElementById('taskForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const status = document.getElementById('taskStatus').value;
    const priority = parseInt(document.getElementById('taskPriority').value);
    addTask(title, status, priority);
    e.target.reset(); // Reset form fields
});

document.getElementById('showPending').addEventListener('click', () => {
    const pendingTasks = filterByStatus("Pending");
    displayTasks(pendingTasks);
});

document.getElementById('showCompleted').addEventListener('click', () => {
    const completedTasks = filterByStatus("Completed");
    displayTasks(completedTasks);
});

document.getElementById('showHighPriority').addEventListener('click', () => {
    const highPriorityTask = findHighPriorityTask();
    displayTasks(highPriorityTask ? [highPriorityTask] : []);
});