//clases en js

class Tarea {
    constructor(nombre, prioridad)
    {
      this.nombre = nombre;
      this.prioridad = prioridad
    }

    mostrar()
    {
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}


 class ComprasPendientes extends Tarea{
     constructor(nombre, prioridad, cantidad)
     {
     super(nombre, prioridad)
      this.cantidad = cantidad
     }
 }

//crear objetos
let tarea1 = new Tarea('Aprender Javascript', 'Alta');
let tarea2 = new Tarea('Preparar cafe', 'Alta');
let tarea3 = new Tarea('Pasear al perro', 'media');
let tarea4 = new Tarea('visitar a mis suegros', 'baja');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());

//compras

let compra1 =  new ComprasPendientes("Jabon", "Urgente", 3);