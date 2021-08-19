let agregarTarea=document.getElementById("agregarTarea");
agregarTarea.addEventListener("click",agregar);
let eliminar=document.getElementById("eliminar");
eliminar.addEventListener("click",eliminarTodo);

function agregar() {
    let input=document.getElementById("input").value;
    document.getElementById("tarea").innerHTML +=`<li> ${input} </li>`;
}
//function eliminarTodo() {
 //   let lista=document.getElementById("eliminarLista");
 //   lista.classList.toggle("ocultar");
//}

function eliminarTodo() {
    let eliminarLista=document.getElementById("eliminarLista");
    let tareaInput=document.getElementById("tarea");
    eliminarLista.removeChild(tareaInput);
}