//arreglosco

 carrito = ["producto 1", "producto 2", "producto 3"];

//console.log(carrito);

// const appContenedor = document.querySelector("#app");
  
// let html ='';
// carrito.forEach(item => {
//       html += `<li>${item}</li>`
//   });

 //appContenedor.innerHTML = html;

carrito.map(producto =>{
     return 'El producto es ' + producto;
    });

    console.log(carrito);