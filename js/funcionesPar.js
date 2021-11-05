

//funciones con parametros default
function saludo(nombre = "michelle", ocupacion = "programador")
{
    console.log(`Hola mi nombre es ${nombre} y mi ocupacion es ${ocupacion}`);
}
saludo("Caleb", "Desarrollador");





const saludar = function(nombre = "michelle", ocupacion = "programador")
{
    console.log(`Hola mi nombre es ${nombre} y mi ocupacion es ${ocupacion}`);
}


saludar();



