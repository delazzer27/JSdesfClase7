// VARIABLES
class CursoProd {
    constructor(materia, docente, precio) {
        this.materia = materia;
        this.docente = docente;
        this.precio = precio;
    }
}

let listaCursos = [];

const agregarCurso = () => {
    let materia = document.querySelector("#buscar1").value.toLowerCase();
    let docente = document.querySelector("#buscar2").value;
    let precio = document.querySelector("#buscar3").value;
    let nuevoCurso = new CursoProd(materia, docente, precio);
    listaCursos.push(nuevoCurso);
    console.log(nuevoCurso);
}

// const materia = document.querySelector("#buscar1");
// materia.onkeyup = () => {
//     console.log(materia.value.toLowerCase());
// }

// let boton = document.querySelector("#btnFiltrar");
// boton.addEventListener("click", ()=> {

// })
let buscarMateria = document.querySelector("#buscar1").value.toLowerCase();
let tituloClase = document.querySelector(".card-title");
let resultado = tituloClase.map(obj => obj.includes(buscarMateria));
console.log(resultado);
