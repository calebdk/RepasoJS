//funciones de tipo flecha



//let viajando  = function(destino)
//{
 //  return `viajando a la ciudad de: ${destino}`;
//}



//arrow function
//cuando pasas un parametro puedes quitar los parentesis
let viajando  = (destino, duracion) =>
{
    return `viajando a la ciudad de: ${destino} por ${duracion}`;
}
  
let viaje  = viajando("Paris", "3 meses");
    
console.log(viaje);
