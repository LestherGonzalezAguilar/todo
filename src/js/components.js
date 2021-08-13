import { todoList } from "..";
import { Todo } from "../classes";


//Referencias en el HTML

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
export const crearTodoHtml = ({ tarea, completado, id }) => {
    const htmlTodo =
        `<li class="${(completado) ? 'completed' : ''}" data-id="${id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(completado) ? 'checked' : ''}>
                <label>${tarea}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `
    const div = document.createElement('div');
    div.innerHTML = htmlTodo

    divTodoList.append(div.firstElementChild)

    return div
}

//Events


txtInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && e.target.value != '') {
        if (todoList.todos.filter(todo => todo.tarea == e.target.value).length === 0) {
            const nuevoTodo = new Todo(e.target.value)
            todoList.nuevoTodo(nuevoTodo)

            crearTodoHtml(nuevoTodo)
            txtInput.value = ''

        } else {
            alert('Ya existe la tarea')
        }
    }
})

divTodoList.addEventListener('click', e => {


    const nombreElemento = e.target.localName // input, label, button
    const todoElemento = e.target.parentElement.parentElement
    const todoId = todoElemento.getAttribute('data-id')

    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId)
        todoElemento.classList.toggle('completed')
    }
    else if (nombreElemento.includes('button')) { //borrar todo

        todoList.eliminarTodo(todoId)

        // todoElemento.parentNode.removeChild(todoElemento);
        divTodoList.removeChild(todoElemento)

    }



})


btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados()

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i]


        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento)
        }
    }
})


ulFiltros.addEventListener('click', e => {
    console.log(e.target.text);
    const filtro = e.target.text;

    if (!filtro) return;

    anchorFiltros.forEach(element => element.classList.remove('selected'))

    e.target.classList.add('selected')

    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden')

        const completado = elemento.classList.contains('completed')

        switch (filtro) {
            case 'Pendientes':
                if (completado)
                    elemento.classList.add('hidden')
                break;
            case 'Completados':
                if (!completado)
                    elemento.classList.add('hidden')
                break;

        }

    }



})