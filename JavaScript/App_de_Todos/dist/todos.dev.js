"use strict";

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var todos = ['Fazer café', 'Estudar Javascript', 'Acessar a comuniade Rocketseat'];

function renderTodos() {
  //Remove todo o conteúdo da lista
  listElement.innerHTML = ''; //For especifico para arrays

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      todo = _step.value;
      var todoElement = document.createElement('li');
      var todoText = document.createTextNode(todo);
      var linkElement = document.createElement('a');
      linkElement.setAttribute('href', '#'); //Procura no array de todos o índice do todo com o texto passado

      var pos = todos.indexOf(todo);
      linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
      var linkText = document.createTextNode('Excluir');
      linkElement.appendChild(linkText);
      todoElement.appendChild(todoText);
      todoElement.appendChild(linkElement);
      listElement.appendChild(todoElement);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value; //A função push adiciona um elemento no fim do array

  todos.push(todoText);
  inputElement.nodeValue = '';
  renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(position) {
  todos.splice(todo, 1);
  renderTodos();
}