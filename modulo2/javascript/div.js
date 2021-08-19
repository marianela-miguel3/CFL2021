//let moverBoton=document.getElementById("mover");
let botones=document.querySelectorAll("button");
let divs=document.querySelectorAll(".otroEstilo");
console.log(divs);
for (let indice = 0; indice < botones.length; indice++) {
botones[indice].addEventListener("click",function(e){     
moverBtn(indice);   
//});}
//moverBoton.addEventListener("click",moverBtn);
//let otroBoton=document.getElementById("moverOtro");
    
    //function moverBtn() {
       // let div=document.getElementById("miDiv");
       // div.classList.toggle("oculto");
    //}

//moverBoton.addEventListener("click",function(e) {
 //   moverBtn();
//})
//otroBoton.addEventListener("click",function(e) {
//    moverBtn();
//})
function moverBtn(indice) {
divs[indice].classList.toggle("oculto");
}

//function moverBtn(n) {
//let div=document.getElementById("n");
//div.classList.toggle("oculto");
//}

let agregarTarea=document.getElementById("agregar");
agregarTarea.addEventListener("click",agregarTareas)

function agregarTareas() {
let actividadIngresada=document.querySelector("#actividadIngresada").value;
document.querySelector("#lista").innerHTML +=`<li> ${actividadIngresada} </li>`;
}


