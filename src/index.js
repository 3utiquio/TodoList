import './styles.css';

// import {Todo} from './class/todo.class';
// import {TodoList} from './class/todo-list.class';
import {Todo, TodoList} from './class'; //con esto importamos las clases y en automatico busca el index
import {crearTodoHtml} from './js/componentes';

export const todoList = new TodoList();

//console.log(todoList.todos);
//todoList.todos.forEach( todo => crearTodoHtml(todo); ); Lo siguiente es igual pero reducido:
todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos);

//const todos = []; Aqui se podrian ir alamacenando las tareas, pero no es eficiente porque hay que trabajar
//con otros procedimientos, lo mejor es trabajar con unsa clase.
//const tarea = new Todo('Aprender JavaScript');

//todoList.nuevoTodo(tarea);

//console.log(todoList);

//crearTodoHtml(tarea);