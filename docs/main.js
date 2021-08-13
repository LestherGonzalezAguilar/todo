/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ todoList)
});

;// CONCATENATED MODULE: ./src/classes/todo.class.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Todo = /*#__PURE__*/function () {
  function Todo(tarea) {
    _classCallCheck(this, Todo);

    this.tarea = tarea;
    this.id = new Date().getTime();
    this.completado = false;
    this.creado = new Date();
  }

  _createClass(Todo, [{
    key: "imprimirClase",
    value: function imprimirClase() {
      console.log("".concat(this.tarea, " - ").concat(this.id));
    }
  }], [{
    key: "fromJson",
    value: function fromJson(_ref) {
      var id = _ref.id,
          tarea = _ref.tarea,
          completado = _ref.completado,
          creado = _ref.creado;
      var tempTodo = new Todo(tarea);
      tempTodo.id = id;
      tempTodo.completado = completado;
      tempTodo.creado = creado;
      return tempTodo;
    }
  }]);

  return Todo;
}();
;// CONCATENATED MODULE: ./src/classes/todo-list.class.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function todo_list_class_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function todo_list_class_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function todo_list_class_createClass(Constructor, protoProps, staticProps) { if (protoProps) todo_list_class_defineProperties(Constructor.prototype, protoProps); if (staticProps) todo_list_class_defineProperties(Constructor, staticProps); return Constructor; }


var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    todo_list_class_classCallCheck(this, TodoList);

    // this.todos = []
    this.cargarLocalStorage();
  }

  todo_list_class_createClass(TodoList, [{
    key: "nuevoTodo",
    value: function nuevoTodo(todo) {
      this.todos.push(todo);
      this.guardarLocalStorage();
    }
  }, {
    key: "eliminarTodo",
    value: function eliminarTodo(id) {
      this.todos = this.todos.filter(function (todo) {
        return todo.id !== parseInt(id);
      });
      this.guardarLocalStorage();
    }
  }, {
    key: "marcarCompletado",
    value: function marcarCompletado(id) {
      var _iterator = _createForOfIteratorHelper(this.todos),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var todo = _step.value;

          if (todo.id === parseInt(id)) {
            todo.completado = !todo.completado;
            this.guardarLocalStorage();
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "eliminarCompletados",
    value: function eliminarCompletados() {
      this.todos = this.todos.filter(function (todo) {
        return todo.completado == false;
      }); //retornar todos los que no estan completados

      this.guardarLocalStorage();
    }
  }, {
    key: "guardarLocalStorage",
    value: function guardarLocalStorage() {
      localStorage.setItem('todo', JSON.stringify(this.todos));
    }
  }, {
    key: "cargarLocalStorage",
    value: function cargarLocalStorage() {
      this.todos = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []; // this.todos = this.todos.map(obj => Todo.fromJson(obj))

      this.todos = this.todos.map(Todo.fromJson);
    }
  }]);

  return TodoList;
}();
;// CONCATENATED MODULE: ./src/js/components.js
function components_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = components_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function components_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return components_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return components_arrayLikeToArray(o, minLen); }

function components_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 //Referencias en el HTML

var divTodoList = document.querySelector('.todo-list');
var txtInput = document.querySelector('.new-todo');
var btnBorrar = document.querySelector('.clear-completed');
var ulFiltros = document.querySelector('.filters');
var anchorFiltros = document.querySelectorAll('.filtro');
var crearTodoHtml = function crearTodoHtml(_ref) {
  var tarea = _ref.tarea,
      completado = _ref.completado,
      id = _ref.id;
  var htmlTodo = "<li class=\"".concat(completado ? 'completed' : '', "\" data-id=\"").concat(id, "\">\n            <div class=\"view\">\n                <input class=\"toggle\" type=\"checkbox\" ").concat(completado ? 'checked' : '', ">\n                <label>").concat(tarea, "</label>\n                <button class=\"destroy\"></button>\n            </div>\n            <input class=\"edit\" value=\"Create a TodoMVC template\">\n        </li>\n    ");
  var div = document.createElement('div');
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);
  return div;
}; //Events

txtInput.addEventListener('keyup', function (e) {
  if (e.keyCode === 13 && e.target.value != '') {
    if (todoList.todos.filter(function (todo) {
      return todo.tarea == e.target.value;
    }).length === 0) {
      var nuevoTodo = new Todo(e.target.value);
      todoList.nuevoTodo(nuevoTodo);
      crearTodoHtml(nuevoTodo);
      txtInput.value = '';
    } else {
      alert('Ya existe la tarea');
    }
  }
});
divTodoList.addEventListener('click', function (e) {
  var nombreElemento = e.target.localName; // input, label, button

  var todoElemento = e.target.parentElement.parentElement;
  var todoId = todoElemento.getAttribute('data-id');

  if (nombreElemento.includes('input')) {
    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle('completed');
  } else if (nombreElemento.includes('button')) {
    //borrar todo
    todoList.eliminarTodo(todoId); // todoElemento.parentNode.removeChild(todoElemento);

    divTodoList.removeChild(todoElemento);
  }
});
btnBorrar.addEventListener('click', function () {
  todoList.eliminarCompletados();

  for (var i = divTodoList.children.length - 1; i >= 0; i--) {
    var elemento = divTodoList.children[i];

    if (elemento.classList.contains('completed')) {
      divTodoList.removeChild(elemento);
    }
  }
});
ulFiltros.addEventListener('click', function (e) {
  console.log(e.target.text);
  var filtro = e.target.text;
  if (!filtro) return;
  anchorFiltros.forEach(function (element) {
    return element.classList.remove('selected');
  });
  e.target.classList.add('selected');

  var _iterator = components_createForOfIteratorHelper(divTodoList.children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elemento = _step.value;
      elemento.classList.remove('hidden');
      var completado = elemento.classList.contains('completed');

      switch (filtro) {
        case 'Pendientes':
          if (completado) elemento.classList.add('hidden');
          break;

        case 'Completados':
          if (!completado) elemento.classList.add('hidden');
          break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
;// CONCATENATED MODULE: ./src/index.js

 //busca el index por defecto


var todoList = new TodoList(); // todoList.todos.forEach(todo => crearTodoHtml(todo)); Opcion

todoList.todos.forEach(crearTodoHtml); //* Solo funciona para un argumento esta sintaxis, si son dos parametros se debe usar la opcion anterior
// const newTodo = new Todo('Aprender javascript')
// todoList.nuevoTodo(newTodo);
// todoList.todos[0].imprimirClase();

console.log('Todos', todoList.todos);
/******/ })()
;