const persona = {
    nombre: "Caleb",
    trabajo: "programador",
    edad: 32,
    musicaRock: true,
    mostrarInformacion: function(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
}

persona.mostrarInformacion();