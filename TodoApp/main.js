const addForm = document.forms['addTask']
const all = document.getElementById('all');
const complete = document.getElementById('complete');
const active = document.getElementById('active');
const LOCAL_STORAGE_KEY = 'taskData'
const list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
const taskList = document.getElementById('taskList');
const optionsBoard = document.getElementById("options")

const createTask = (text) => {
    return {
        id: Date.now().toString(),
        content: text,
        isCompleted: false
    };
};

const render = () => {
    check();
    deleteTasks();
}

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let taskContent = document.getElementById('taskToAdd').value;
    if (taskContent !== '' && taskContent !== null) {
        const task = createTask(taskContent);
        list.push(task)
        save();
    }
    addForm.reset();
})

const save = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list))
    displayTaskList();
};


const displayTaskList = () => {
    taskList.textContent = "";
    displayAll();

    complete.addEventListener('click', function () {
        activeChange('complete');
        displayCompleted();
        render();
    })

    active.addEventListener('click', function () {
        activeChange('active');
        displayActive();
        render();
    })

    all.addEventListener('click', function () {
        activeChange('all')
        displayAll();
        render();
    })

    render();
};


displayTaskList();

function check() {
    const checkboxes = document.querySelectorAll(".checkBoxes")
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            list.forEach(task => {
                if (task.id == checkbox.id) {
                    if (task.isCompleted) {
                        task.isCompleted = false
                    } else {
                        task.isCompleted = true
                    }
                }
            })
            addLine(checkbox);
            save()
        })
        addLine(checkbox);
    });
}

function addLine(checkbox) {
    let taskContent = document.getElementById(`${checkbox.id} span`);
    if (checkbox.checked) {
        taskContent.classList.add("line");
    } else {
        taskContent.classList.remove("line");
    }
}

function deleteTasks() {
    const deleteButtons = document.querySelectorAll(".deleteTask");
    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener('click', deleteTaskEvent => {
            for (let i = 0; i < list.length; i++) {
                if (list[i].id == deleteButton.id) {
                    list.splice(i, 1);
                }
            }
            save();
        })
    })
}

function displayAll() {
    taskList.innerHTML = "";
    activeChange('all')
    const activeT = list.filter(task => !task.isCompleted);
    const tasksLeft = document.querySelector('.tasksLeft')
    tasksLeft.innerText = `${activeT.length} task left`;

    list.forEach(task => {
        const node = document.createElement("LI");

        const buttonAll = document.getElementById('all');
        buttonAll.classList.add('active');

        const checkBox = document.createElement("INPUT");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "checkBoxes");
        checkBox.setAttribute("id", `${task.id}`);
        checkBox.checked = task.isCompleted

        const span = document.createElement("SPAN");
        span.setAttribute("id", `${task.id} span`);
        span.textContent = task.content;

        const button = document.createElement("BUTTON");
        button.setAttribute("class", "deleteTask");
        button.setAttribute("id", task.id)
        button.innerText = 'X';

        node.setAttribute('id', "tasks");
        node.append(checkBox);
        node.append(span)
        node.append(button)

        taskList.appendChild(node);

    });
}

function displayActive() {
    const activeTasks = list.filter(task => !task.isCompleted);
    taskList.innerHTML = "";
    activeChange('active');
    const tasksLeft = document.querySelector('.tasksLeft')
    tasksLeft.innerText = `${activeTasks.length} task left`

    activeTasks.forEach(task => {
        const node = document.createElement("LI");

        const span = document.createElement("SPAN");
        span.setAttribute("id", `${task.id} span`);
        span.textContent = task.content;

        const button = document.createElement("BUTTON");
        button.setAttribute("class", "deleteTask");
        button.setAttribute("id", task.id)
        button.innerText = 'X';

        node.setAttribute('id', "activeTasks");
        node.append(span)
        node.append(button)

        taskList.appendChild(node);

    })
}

function displayCompleted() {
    const completedTasks = list.filter(task => task.isCompleted);
    taskList.innerHTML = "";
    activeChange('complete');
    const taskLeft = document.querySelector('.tasksLeft');
    taskLeft.innerHTML = `${completedTasks.length} task completed`;

    completedTasks.forEach(task => {
        const node = document.createElement("LI");

        const span = document.createElement("SPAN");
        span.setAttribute("id", `${task.id} span`);
        span.textContent = task.content;

        const button = document.createElement("BUTTON");
        button.setAttribute("class", "deleteTask");
        button.setAttribute("id", task.id)
        button.innerText = 'X';

        node.setAttribute('id', "completedTasks");

        node.append(span)
        node.append(button)
        taskList.appendChild(node);
    })

}

function activeChange(view) {
    const buttonAll = document.getElementById('all');
    const buttonActive = document.getElementById('active');
    const buttonComplete = document.getElementById('complete');

    if (view === 'all') {
        buttonAll.classList.add('active');
        buttonActive.classList.remove('active');
        buttonComplete.classList.remove('active');
    } else if (view === 'active') {
        buttonAll.classList.remove('active');
        buttonActive.classList.add('active');
        buttonComplete.classList.remove('active');
    } else if (view === 'complete') {
        buttonAll.classList.remove('active');
        buttonActive.classList.remove('active');
        buttonComplete.classList.add('active');
    }
}