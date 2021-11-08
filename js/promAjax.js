//promises con ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) =>
{
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamado a ajax
     
      const xhr = new XMLHttpRequest();
      xhr.open('GET', api, true);

    //load
    xhr.onload = () =>
    {
        if(xhr.status === 200)
        {
        resolve(JSON.parse(xhr.responseText).results);
        }
        else{
           reject(Error(xhr.statusText));
        }
    }
     
    //opcional on error
    xhr.onerror = (error) => reject(error);
    //enviar
    xhr.send()
});

descargarUsuarios(5)
.then(
     miembros => imprimirHTML(miembros),
     error => console.log(
         new Error("Hubo un error" + error)
     )
)


function imprimirHTML(usuarios)
{
    let html = '';
   usuarios.forEach(usuario => {
        html += `
          <li>
             Nombre: ${usuario.name.first}
             Pais: ${usuario.nat}
             imagen: 
                   <img src="${usuario.picture.medium}">
          </li>
        `;
   });


   const contenedorApp = document.querySelector("#app");
   contenedorApp.innerHTML = html;
}