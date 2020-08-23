var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar a comuniade Rocketseat'
]

function renderTodos(){
    //Remove todo o conteúdo da lista
    listElement.innerHTML = '';
    //For especifico para arrays
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.setAttribute('href', '#');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    //A função push adiciona um elemento no fim do array
    todos.push(todoText);
    inputElement.nodeValue = '';
    renderTodos();
}



buttonElement.onclick = addTodo;