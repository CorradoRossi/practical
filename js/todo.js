//@ts-check

var todoList = {
    todos: [],
    addTodo: function (todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
    },
    changeTodo: function (position, todoText) {
      this.todos[position].todoText = todoText;
    },
    deleteTodo: function (position) {
      this.todos.splice(position, 1);
    },
    toggleCompleted: function (position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
    },

    toggleAll: function () {
      var totalTodos = this.todos.length;
      var completedTodos = 0;
  
      this.todos.forEach(function(todo) {
        if (todo.completed === true) {
          completedTodos++;
        }
      });
  
      this.todos.forEach(function(todo) {
        if (completedTodos === totalTodos) {
          todo.completed = false;
        } else {
          todo.completed = true;
        }
      });
    },

//    completeTask: function () {
//        checkBox.onchange = 
//    }
  };
  
  var handlers = {
    addTodo: function() {
      var addTodoTextInput = document.getElementById('addTodoTextInput');
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value ='';
      view.displayTodos();
    },
    changeTodo: function() {
      var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
      var changeTodoTextInput = document.getElementById('changeTodoTextInput');
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value ='';
      changeTodoTextInput.value ='';
      view.displayTodos();
    },
    deleteTodo: function(position) {
      todoList.deleteTodo(position);
      view.displayTodos();
    },
    toggleCompleted: function() {
      var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value ='';
      view.displayTodos();
    },
    toggleAll: function() {
      todoList.toggleAll();
      view.displayTodos();
    }
  };

  var addInput = document.getElementById('addTodoTextInput');

  addInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("addButton").click();
  }
});

//  var viewTwo = {
//    displayTodos: function() {
//        var todosUl = document.
//    }
//  };
  
  var view = {
    displayTodos: function() {
      var todosUl = document.querySelector('ul');
      todosUl.innerHTML = '';
  
      todoList.todos.forEach(function(todo, position) {
        var todoLi = document.createElement('div');
        todoLi.className = 'toast toast-primary m-2';
        var todoTextWithCompletion = '';
  
    //    if (todo.completed === true) {

    //    }

        if (todo.completed === true) {
          todoTextWithCompletion = '    ' + todo.todoText;
        } else {
          todoTextWithCompletion = '    ' + todo.todoText;
        }
        todoLi.id = position;
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createCheckbox());
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
      }, this);
    },
    createCheckbox: function() {
      var checkBox = document.createElement('label');
      checkBox.className = 'form-checkbox float-left';
      checkBox.appendChild(this.createMyInput());
      checkBox.appendChild(this.createMyIcon());
      return checkBox;
    },
    createMyInput: function() {
      var myInput = document.createElement('input');
      myInput.type = 'checkbox'; 
      myInput.id = 'mycheckboxId';
//      myInput.onchange = 'todo.completed = !todo.completed';
      return myInput;
    },
    createMyIcon: function() {
      var myIcon = document.createElement('i');
      myIcon.className = 'form-icon';
      return myIcon;
    },
    createDeleteButton: function() {
      var deleteButton = document.createElement('button');
      deleteButton.className = 'deleteButton btn btn-clear float-right';
      return deleteButton;
    },
    setUpEventListeners: function() {
      var todosUl = document.querySelector('ul');
  
      todosUl.addEventListener('click', function(event) {
  
        var elementClicked = event.target;
  
        if (elementClicked.className === 'deleteButton btn btn-clear float-right') {
          handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        }
      });
    }
  };
  
  view.setUpEventListeners();
  