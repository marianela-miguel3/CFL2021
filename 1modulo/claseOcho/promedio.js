let readlineSync=require("readline-sync");
let cantidadAlumnos=readlineSync.questionInt("ingrese la cantidad de alumnos: ");
let nombreAlumnos=new Array(cantidadAlumnos);
let primerTrimetre,segundoTrimestre,tercerTrimestre;
let promedioAlumnos=new Array(cantidadAlumnos);
indice=0;
for (indice=0; indice<cantidadAlumnos; indice++) {
nombreAlumnos[indice]=readlineSync.question("ingrese el nombre del alumno: " + indice + ":");
primerTrimetre=readlineSync.questionInt("ingrese la nota del primer trimestre: ");
segundoTrimestre=readlineSync.questionInt("ingrese la nota del segundo trimestre: ");
tercerTrimestre=readlineSync.questionInt("ingrese la nota del tercer trimestre: ");
alumnosNotas(primerTrimetre,segundoTrimestre,tercerTrimestre,3);
console.log("El promedio de: ", nombreAlumnos[indice]," es ",+promedioAlumnos[indice],":");
}
console.log("Listado de alumnos y sus promedios: " + nombreAlumnos + promedioAlumnos);


function alumnosNotas(nota1,nota2,nota3,l) {  
    promedioAlumnos[indice]=((nota1 + nota2 + nota3)/l);
    return promedioAlumnos;
}

