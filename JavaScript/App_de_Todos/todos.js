var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Retorna o conteúdo salvo em localstorage e guarda na var todos
// A forma de atribuir um valor padrão a variável, caso ela não tenha um valor inicial
//é adicionar || e em seguida o valor, nesse caso um array vazio []
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    //Remove todo o conteúdo da lista
    listElement.innerHTML = '';
    //For especifico para arrays
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        //Procura no array de todos o índice do todo com o texto passado
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        var linkText = document.createTextNode('Excluir');

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
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(position){
    //Remove um elemento do array, o position é o indice
    // e o 1 é quantos elementos serão removidos a partir do índice
    todos.splice(position, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    //Cria um local de armazenamento chamado list_todos
    //Só grava falores string, por isso o array não pode ser passado diretament
    //O JSON.stringify transforma o array de todos em string
    localStorage.setItem('list_todos', JSON.stringify(todos));
}