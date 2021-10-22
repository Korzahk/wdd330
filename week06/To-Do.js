function add() {
    let newTodo = document.getElementById("add").value;
    console.log(newTodo);
    let todoList = document.querySelector("div.todoList")
    // while (todoList.firstChild) todoList.removeChild(todoList.firstChild);
    let myTable = document.createElement('table');
    myTable.className = 'todoListTable';
    let myTableRow = document.createElement('tr');
    myTableRow.className = 'todoListTableRow';
    let myTableData = document.createElement('td');
    myTableData.innerText = newTodo;
    myTableRow.append(myTableData);
    myTable.append(myTableRow);
    todoList.append(myTable);
}