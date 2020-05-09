//vamos a generar una clase Persona
//con algunos atributos
class Persona {
    nombre:string;
    apellido:string; 
    edad: number;
    provincia: string = "Tucuman";

    esProfesional: boolean = false;


    constructor(pnombre:string, papellido:string, pedad: number) {
        this.nombre = pnombre;
        this.apellido = papellido;
        this.edad = pedad;
    }

}

//luego generamos instancia 1 de la clase 
//persona para definir el objeto 1
let instanciaPersona3 = new Persona("DIEGO", "HERRERA", "18");
let instanciaPersona4 = new Persona("DIEGOXX", "HERRERAXX", "9");

// finalmente imprimimos el contenido de los objetos. 

console.log(JSON.stringify(instanciaPersona3));

console.log(JSON.stringify(instanciaPersona3));