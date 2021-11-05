const aprendiendoJS = {
    version:{
       nueva: "ES6+",
       anterior: "ES5"
    },
    frameworks: ["react", "VueJS", "Angular", ]
}
//destructuring es extraer valores de un objeto


//console.log(aprendiendoJS);
// let version = aprendiendoJS.version.nueva;
// let frameworks = aprendiendoJS.frameworks

//forma nueva
let {anterior} = aprendiendoJS.version;

console.log(anterior);


   