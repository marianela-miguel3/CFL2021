let clickear=document.getElementById("click");
let input=document.getElementById("input");
let h1=document.getElementById("h1");
let h2=document.getElementById("h2");
clickear.addEventListener("click",seleccionar);

function seleccionar() {
    if (input.checked) {
        h1.innerHTML="Hola!! esto es un saludo en h1"
    }else{
        h2.innerHTML="Hola!! esto es un saludo en h2";
    }
}


