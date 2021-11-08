//spread operator 

// let lenguajes  = ["JavaScript", "Php", "Python"];
// let frameworks = ["React", "Laravel", "Django"];

//unir los arreglos em 1 solo

//let combinacion =  lenguajes.concat(frameworks);
//let combinacion =  [...lenguajes,...frameworks];


//spread operator
//let [ultimo]= [...lenguajes].reverse();


//console.log(ultimo);
//console.log(lenguajes);



function suma(a,b,c)
{
    console.log(a+b+c);
}

const numeros  = [1,2,3];

suma(...numeros);
