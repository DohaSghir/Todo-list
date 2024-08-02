const todoList = [];

function deleteTodo(index) {
    todoList.splice(index,1);
    renderTodoList();
}

function renderTodoList() {
    let todoListHTML = ``;
    for (let i = 0; i < todoList.length; i++){
        todoListHTML += `<tr><td>${todoList[i].name}</td>
            <td>${todoList[i].dueDate}</td>
            <td><button class="delete-button" onclick="deleteTodo(${i})">Delete</button></td></tr>`;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}
renderTodoList();
function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value;
    if (name) {
        todoList.push({name,dueDate});
        renderTodoList();
        inputElement.value = '';
        dateInputElement.value = '';
    }
}


