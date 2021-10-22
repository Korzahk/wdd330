function add() {
    let newTodo = document.getElementById("add").value;
    let todoList = document.querySelector("div.todoList")
    // while (todoList.firstChild) todoList.removeChild(todoList.firstChild);
    let myTable = document.createElement('table');
    myTable.className = 'todoListTable';
    let myTableRow = document.createElement('tr');
    myTableRow.id = newTodo;
    let myTableData = document.createElement('td');
    let myCheckbox = document.createElement('input');
    myCheckbox.type = 'checkbox';
    myTableData.innerText = newTodo;
    let deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'x';
    deleteButton.onclick = function() { deleteTodo(myTable, newTodo); };

    myTableRow.append(myCheckbox, myTableData, deleteButton);
    myTable.append(myTableRow);
    todoList.append(myTable);
}
function deleteTodo(myTable, todo) {
    console.log(todo);
    todoToDelete = document.getElementById(todo);
    myTable.removeChild(todoToDelete);
}