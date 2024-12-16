(function() {

    function createAppTitle(title) {
        let appTitle = document.createElement('h1');
        appTitle.innerHTML = title;

        appTitle.classList.add('h1');
        return appTitle;

    }
    function createTodoItemForm() {

        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Что нужно сделать?';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return{
            form,
            input,
            button,
        };

    }
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }
    
    function createTodoItem(name) {
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div');
        let doneButton =  document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item');
        item.textContent = name;

        buttonGroup.classList.add('btn-group','btn-group-sm');
        doneButton.classList.add('btn','btn-success');
        doneButton.textContent ='Готово';
        deleteButton.classList.add('bnt','btn-danger');
        deleteButton.textContent ='Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);


        return {
            item,
            doneButton,
            deleteButton,       
        };
    }
        
    document.addEventListener('DOMContentLoaded', function() {
        let container = document.getElementById('todo-app');
        let todoAppTitle = createAppTitle('todos');
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        
        todoItemForm.form.addEventListener('submit', function(e){
            e.preventDefault();
            if (!todoItemForm. input.value) {
                return;
            }
            let todoItem = createTodoItem( todoItemForm.input.value);
            todoItem.doneButton.addEventListener('click', function() {
            todoItem.item.classList.toggle('list-group-item-success');
            });
            todoItem.deleteButton.addEventListener('click', function() {
             if (confirm ('Вы уверены?') ) {
               todoItem. item. remove();
             }
            });
            todoList.append (todoItem. item);
            todoItemForm.input.value = '';
        });
        
    });


})();

