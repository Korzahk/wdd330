// add todo to todo list
function add() { 
    // checkbox for todo item
    let myCheckbox = document.createElement('input');
    myCheckbox.type = 'checkbox';

    // todo item
    let newTodo = document.getElementById("add").value;
    document.getElementById("add").value = ''; // clear add field
    let myTableData = document.createElement('td');
    myTableData.innerText = newTodo;

    // delte button for todo item
    let deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'x';
    deleteButton.onclick = function() { deleteTodo(myTable, newTodo); };

    // create todo row
    let myTableRow = document.createElement('tr');
    myTableRow.id = newTodo;
    myTableRow.append(myCheckbox, myTableData, deleteButton);
    
    // create todo list
    let myTable = document.createElement('table');
    myTable.className = 'todoListTable';
    myTable.append(myTableRow);

    // make todo list visible
    let todoList = document.querySelector("div.todoList")
    todoList.append(myTable);
}

// remove todo from todo list
function deleteTodo(myTable, todo) {
    todoToDelete = document.getElementById(todo);
    myTable.removeChild(todoToDelete);
}