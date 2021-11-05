//object constructor

function Tarea(nombre, urgencia)
{
     this.nombre  = nombre;
     this.urgencia=  urgencia;
}

//crear una nueva tarea
const tarea1 = new Tarea("aprender javaScript y react", "urgente");
const tarea2 = new Tarea("aprender front como ninja", "urgente");
  

console.log(tarea1);
console.log(tarea2);