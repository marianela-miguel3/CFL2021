let inputId=document.getElementById("inputId");
let inputNombre=document.getElementById("inputNombre");
let inputEmail=document.getElementById("inputEmail");
let inputDireccion=document.getElementById("inputDireccion");
let mostrarUsuarios=document.getElementById("mostrarUsuarios");
let cargarUsuario=document.getElementById("agregarUsuario");
let contenido=document.getElementById("contenido");
let usuarios=[];
loadUsuarios();
cargarUsuario.addEventListener(`click`, agregarUsuario);
//mostrarUsuarios.addEventListener(`click`,loadUsuarios);

async function loadUsuarios(){
    try{
        let response=await fetch(`/usuario`);
        if(response.ok){
            let t=await response.json();
            usuarios=t;
            actualizarUsuarios();
        }else{
            contenido.innerHTML=`<h1>Error en lectura de servidor</h1>`;
        }
    }catch(error){
        contenido.innerHTML=`<h1>Error en conexion con servidor</h1>`;
    }
}
function actualizarUsuarios() {
    let datos=`<ul>`
    for (let i=0;i<usuarios.length;i++) {
        datos+=`<li> ${usuarios[i].id} ${usuarios[i].nombre} ${usuarios[i].email} ${usuarios[i].direccion}</li>`;
    }
    datos+=`</ul>`;
    contenido.innerHTML=datos;
}

function agregarUsuario() {
    let usuario={
        id:parseInt(inputId.value),
        nombre:inputNombre.value,
        email:inputEmail.value,
        direccion:inputDireccion.value
    };
    usuarios.push(usuario);
    //crear(tarea);
    mostrar();
};