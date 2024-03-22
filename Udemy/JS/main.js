//alertas
alert("Hola!!!!!!!!!!!!!!!!!!!!!!");

//variables
let nombre = "Luis";
nombre = "Luis";

//constantes
const altura = 187;
const apellido = "Hdez";


//mostrar por consola
console.log(nombre);
console.log(altura);

//concatenacion
let concatenacion = nombre + " " + apellido;

//Seleccionar elementos de la pagina
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h1> Soy la caja de datos </h1>
    <h2> Mi nombre es: ${nombre} </h2>
    <h3> Mi altura es: ${altura} cm </h3>
`;
