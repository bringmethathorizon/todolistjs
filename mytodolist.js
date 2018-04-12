
var myList = document.getElementsByTagName("LI");

let countId = 0;
//let listOfAwesomeTodoItems = [];
var todoForm = document.getElementById('todo_form');
var todoList = document.getElementById('todo_list');
var addInput = document.getElementById('add_inp');
//var allItems = document.querySelectorAll('.todo_item');


todoForm.addEventListener('submit', addNewElement);


for (var i = 0; i < myList.length; i++) {
    var s = document.createElement("SPAN");
    var t = document.createTextNode("\u00D7");
    s.className = "close";
    s.appendChild(t);
    myList[i].appendChild(s);
}

    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var d = this.parentElement;
        d.style.display = 'none';
    }
}

    function createNewElement(title){
        ++countId;
        let label = document.createElement('label');
        label.innerText = title;
        label.className = 'title';
        label.id = label.className + (countId).toString();

        let editInp = document.createElement('input');
        editInp.type = 'text';
        editInp.className = 'field';
        editInp.id = editInp.className + (countId).toString();


        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.className = "edit";
        editInp.id = editBtn.className + (countId).toString();

        let add = document.createElement('li');
        add.className = 'todo_item';
        add.id = (countId).toString();


        add.appendChild(label);
        add.appendChild(editInp);
        add.appendChild(editBtn);
       // console.log(add);
        return add;
    }


    /* function editItem(event) {
        event.preventDefault();
        let a = document.getElementsByClassName('todo_item');
        document.getElementsByClassName('todo_item').addEventListener('click', ()=>{
            console.log(event.target.id);
        });

    } */

    function addNewElement(event) {
        event.preventDefault();

        if (addInput.value === '') {
            alert("you must enter something");
            return;
        }
        let todoItem = createNewElement(addInput.value);

        todoList.appendChild(todoItem);

        addInput.value = '';
        console.log(addInput);

        var s = document.createElement("SPAN");
        var t = document.createTextNode("\u00D7");
        s.className = "close";
        s.appendChild(t);
        todoItem.appendChild(s);
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var d = this.parentElement;
                d.style.display = 'none';
            }
        }

    }

  /*  function events(listItem){
        var editBtn = listItem.querySelector(button.edit);
        editBtn.addEventListener('click', editMode);

    } */


    var list = document.querySelector('ul');
    list.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
          }
        }, false);





