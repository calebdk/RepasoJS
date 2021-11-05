function Tarea(nombre, urgencia)
{
     this.nombre  = nombre;
     this.urgencia=  urgencia;
}


Tarea.prototype.mostrarInformacionTarea = function()
{
   return `la tarea ${this.nombre} tiene una prioridad ${this.urgencia}`;
}


  
const tarea1 = new Tarea("Aprender javaScript y React", "Urgente");
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());