let ingresoUno= document.getElementById("ingresoUno");
let ingresoDos= document.getElementById("ingresoDos");
let boton = document.getElementById("boton");
boton.addEventListener("click",contador);

function contador(){
    let contador1 = ingresoUno.value;
    let contador2 = ingresoDos.value;

    if(contador1>0 || contador2>0){
        alert("Ingresaste un numero erroneo.");
    }
};

//|| (contador2>0 || contador1<0)