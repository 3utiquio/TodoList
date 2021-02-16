import { Todo } from ".";

export class TodoList {


    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo=> todo.id != id); // != compara si es distinto, !== (distinto) pero tienen q ser mimo tipo
        this.guardarLocalStorage();
    }
    marcarCompletado(id){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }

    }
    eliminarCompletados(){

        this.todos = this.todos.filter(todo=> !todo.completado);
        this.guardarLocalStorage();
        
    }
    guardarLocalStorage(){
        //localStorage.setItem('mi-key', 'ABCDEF'); el localStorage guarda una cadena texto
        /*setTimeout(()=>{
            localStorage.removeItem('mi-key');
        },1500); en un segundo y medio borra la llave el setTimeout*/

        localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    cargarLocalStorage(){
        /*
        if (localStorage.getItem('todo')){
            this.todos = JSON.parse( localStorage.getItem('todo') );
            console.log('CargarLocal:', this.todos);
            console.log(typeof this.todos);
        }else{
            this.todos = [];
        }*/

        this.todos = (localStorage.getItem ('todo')) 
                     ? JSON.parse( localStorage.getItem ('todo') ) 
                     : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj)) // map "metodo en todos los arreglos" permite barrer cada uno de los
        //elementos que estan dentro de un arreglo y retornar un nuevo arreglo con cada uno de sus elem - obj
        // mutados
    }
}