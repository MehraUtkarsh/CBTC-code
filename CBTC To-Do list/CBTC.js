// Selecting elements from the DOM
const taskInput = document.getElementById('taskInput');
const todoForm = document.getElementById('todoForm');
const taskList = document.getElementById('taskList');
const completedTaskList = document.getElementById('completedTaskList');

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const taskText = taskInput.value.trim(); // Trim any leading or trailing whitespace

    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a button for completing tasks
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'completeButton';
        li.appendChild(completeButton);

        // Append the new task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Add event listener to the complete button
        completeButton.addEventListener('click', function() {
            li.classList.add('completed');
            completeButton.remove(); // Remove the 'Complete' button from completed tasks

            // Move the completed task to the completed task list
            completedTaskList.appendChild(li);
        });
    }
});