function get_todos(){//this function gets the task from input
    var todos = new Array;//This creates an array of tasks that are entered
    var todos_str = localStorage.getItem('todo');//this pulls the task that was saved in the web browser memory
    if (todos_str !==null) {//If the input is not null then JSON.parse will communicate  with the web browser to make the task a JavaScript object.
        todos = JSON.parse(todos_str);
}   return todos; }

function add() {//This function adds the entered task to the get_todos function array
    var task = document.getElementById('task').value;//This takes then entered task and creates a variable of it.
    var todos = get_todos();
    todos.push(task);//This adds a new task to the end of the array
    localStorage.setItem('todo',JSON.stringify(todos));//this converts the task input to a JSON string
    document.getElementById("task").value=" ";
    show();
    return false;
}
function show(){//this function keeps the tasks permanently displayed on the screen
    var todos=get_todos();//this sets the task that was retrieved as a variable

    var html = '<ul>'//this sets us each task as an unordered list
    for (var i=0; i<todos.length; i++){//This displays a task to the list in the order that is is input
        html += '<li>' + todos[i] + '<button class="remove" id=" '+i+' ">x</button></li>'; //this also displays the task as a list and creates the button with the "x"
    };
    html +='</ul>';
    document.getElementById('todos').innerHTML = html;//This displays the task as a list
    
    //----remove button
    var buttons = document.getElementsByClassName('remove');//This tells the browswer how to display the todo array after an item has been removed
    for (var i=0; i<buttons.length; i++) {
    buttons [i].addEventListener('click', remove);
};
}


document.getElementById('add').addEventListener('click', add);//This displays the entered task when the 'Add Item' button is clicked
show();//this will keep the inputs displayed permanently on the screen

var buttons = document.getElementsByClassName('remove');//This tells the browswer how to display the todo array after an item has been removed
    for (var i=0; i<buttons.length; i++) {
    buttons [i].addEventListener('click', remove);


function remove() {//This creates the functionality fo removing a todo item from the array
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show(); //this looks in the show() how to display a removed item on the screen.

    return false;
}

    }