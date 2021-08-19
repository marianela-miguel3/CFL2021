let readlineSync=require("readline-sync");
n=readlineSync.questionInt("ingrese la cantidad de alumnos: ");
let cantidadAlumnos=new Array(n);
let notas= new Array(3);
let promedios= new Array(n);
let alumnoAConsultar;


for (indice=0; indice<n; indice++) {
     cantidadAlumnos[indice]=readlineSync.question("Ingrese el nombre del alumno: " ,indice, ":");
     cargarNotas(notas);
     promedios[indice]=calcularPromedio(notas);
}
console.log("listado de alumnos: ");
mostrarArray(cantidadAlumnos);
alumnoAConsultar=readlineSync.questionInt("ingrese el numero de alumno a consultar: ");
console.log("el promedio del alumno " + cantidadAlumnos[alumnoAConsultar]+ " es: " + promedios[alumnoAConsultar]);

function cargarNotas(arr) {
    for (indice=0; indice<arr.length; indice++) {
        arr[indice]=readlineSync.questionInt("ingrese la nota para el trimestre " + (indice+1) + ":");
    }
}

function calcularPromedio(arr) {
    let suma=0;
    for (indice=0; indice<arr.length; indice++) {
        suma+=arr[indice];
    }
    
     return suma/arr.length;
}

function mostrarArray(arr) {
    for (indice=0; indice<arr.length; indice++) {
        console.log(indice + "-" +arr[indice]);
    }
}