//object literal enhancement

const banda = "metallica";
const genero = "Heavy metal";
const canciones =  
            [
             "Master of puppets",
              "Seek & destroy",
              "Enter sandman"
            ];

//forma anterior 
    // const metallica =  {
    //     banda: banda,
    //     genero: genero,
    //     canciones: canciones
    // }
   
   const metallica = {
       banda,genero,canciones
   }

console.log(metallica);