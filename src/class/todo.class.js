
export class Todo {

    static fromJson({ id, tarea, completado, creado}){
        const tempTodo = new Todo (tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea){
        this.tarea = tarea; //igual a la tarea que recibo por el argumento
        this.id = new Date().getTime(); //151316566
        this.completado = false;
        this.creado = new Date();
    }
}