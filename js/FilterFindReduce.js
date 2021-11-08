//filter find reduce

const personas = [
  {nombre: "juan", edad: 23, aprendiendo: "javascript"},
  {nombre: "caleb", edad: 32, aprendiendo: "React"},
  {nombre: "michelle", edad: 28, aprendiendo: "Rubi"}
];

//console.log(personas);

const mayores = personas.filter(persona => {
    return personas.edad > 28;
});

//existe el find para buscar especificamente por el nombre de un 
//registro que existe en el arreglo


//y tambien existe el reduce que se puede usar para sumar la edad de los 
//registros.

console.log(mayores);
