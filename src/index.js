import './styles.css'
import { Todo, TodoList } from './classes' //busca el index por defecto
import { crearTodoHtml } from './js/components'

export const todoList = new TodoList()


// todoList.todos.forEach(todo => crearTodoHtml(todo)); Opcion
todoList.todos.forEach(crearTodoHtml); //* Solo funciona para un argumento esta sintaxis, si son dos parametros se debe usar la opcion anterior


// const newTodo = new Todo('Aprender javascript')
// todoList.nuevoTodo(newTodo);

// todoList.todos[0].imprimirClase();

console.log('Todos', todoList.todos);
