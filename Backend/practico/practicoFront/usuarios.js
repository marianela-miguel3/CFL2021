let inputId=document.getElementById("inputId");
let inputNombre=document.getElementById("inputNombre");
let inputEmail=document.getElementById("inputEmail");
let inputDireccion=document.getElementById("inputDireccion");
let mostrarUsuarios=document.getElementById("mostrarUsuarios");
let mostrarPublicaciones=document.getElementById("mostrarPublicaciones");
let cargarUsuario=document.getElementById("agregarUsuario");
let cargarPublicacion=document.getElementById("agregarPublicacion");
let inputUserId=document.getElementById("inputUserId");
let inputIdPost=document.getElementById("inputIdPost");
let inputTitulo=document.getElementById("inputTitulo");
let inputCuerpo=document.getElementById("inputCuerpo");
let botonDelUsuario=document.getElementById("delUsuario");
let botonDelPost=document.getElementById("delPost");
let contenido=document.getElementById("contenido");
let contenido2=document.getElementById("contenido2");
let contenido3=document.getElementById("contenido3");
let contenido4=document.getElementById("contenido4");
let botonBuscarUsuario=document.getElementById("buscarUser");
let botonBuscarPost=document.getElementById("buscarPost");
let botonBuscarUserPost=document.getElementById("buscarUserPost");
let botonModificarUsuario=document.getElementById("modificarUsuario");
let botonModificarPost=document.getElementById("modificarPost");
let usuarios=[];
let publicaciones=[];
///Todos los botones(menos eliminar)
cargarUsuario.addEventListener(`click`, agregarUsuario);
cargarPublicacion.addEventListener(`click`,agregarPublicacion)
mostrarUsuarios.addEventListener(`click`,loadUsuarios);
mostrarPublicaciones.addEventListener(`click`,loadPublicaciones);
botonBuscarUsuario.addEventListener(`click`,buscarUsuarioId);
botonBuscarPost.addEventListener(`click`,buscarPostId);
botonBuscarUserPost.addEventListener(`click`,buscarPostUser);
botonModificarUsuario.addEventListener(`click`,modificarUsuario);
botonModificarPost.addEventListener(`click`,modificarPost);

//leer la info guardada en los csv
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
async function loadPublicaciones(){
    try{
        let response=await fetch(`/publicacion`);
        if(response.ok){
            let t=await response.json();
            publicaciones=t;
            actualizarPublicaciones();
        }else{
            contenido2.innerHTML=`<h1>Error en lectura de servidor</h1>`;
        }
    }catch(error){
        contenido2.innerHTML=`<h1>Error en conexion con servidor</h1>`;
    }
}

//ordenar la informacion en tabla

function actualizarUsuarios() {
    let datos='';
    for (let i=0;i<usuarios.length;i++) {
        datos+=`
                 <tr> 
                      <td>${usuarios[i].id}</td>
                      <td>${usuarios[i].nombre}</td>
                      <td>${usuarios[i].email}</td>
                      <td>${usuarios[i].direccion}</td>
                      </tr>`;
    }
    contenido.innerHTML=datos;
}

function actualizarPublicaciones() {
    let post='';
    for (let i=0;i<publicaciones.length;i++) {
        post+=`
                <tr>
                    <td>${publicaciones[i].userId}</td>
                    <td>${publicaciones[i].id}</td>
                    <td>${publicaciones[i].titulo}</td>
                    <td>${publicaciones[i].cuerpo}</td>
                    </tr>`;
    }
    contenido2.innerHTML=post;
}

//Eliminar un post/user
botonDelUsuario.addEventListener(`click`,async ()=>{
    try{
        let response=await fetch(`/usuario/${inputId.value}`,{
            method:`DELETE`,
            headers:{
                "Content-Type":"aplicattion/json"
            }
        });
        if(response.ok){
            loadUsuarios();
            inputId.value="";
        }else{
            contenido.innerHTML="Error en la lectura del servidor";
        }
    }catch(error){
        contenido.innerHTML="Error en la conexion del servidor";
    }
});

botonDelPost.addEventListener(`click`,async ()=>{
    try{
        let response=await fetch(`/publicacion/${inputIdPost.value}`,{
            method:`DELETE`,
            headers:{
                "Content-Type":"aplicattion/json"
            }
        });
        if(response.ok){
            loadPublicaciones();
            inputIdPost.value="";
        }else{
            contenido2.innerHTML="Error en la lectura del servidor";
        }
    }catch(error){
        contenido2.innerHTML="Error en la conexion del servidor";
    }
});

//agregar post/user

function agregarUsuario() {
    console.log("entre");
    let usuario={
        "id":parseInt(inputId.value),
        "nombre":inputNombre.value,
        "email":inputEmail.value,
        "direccion":inputDireccion.value
    };
    console.log(usuario);
    usuarios.push(usuario);
    crearUsuario(usuario);
    actualizarUsuarios();
    inputId.value="";
    inputNombre.value="";
    inputEmail.value="";
    inputDireccion.value="";
};

function agregarPublicacion() {
    let publicacion={
        "userId":parseInt(inputUserId.value),
        "id":parseInt(inputIdPost.value),
        "titulo":inputTitulo.value,
        "cuerpo":inputCuerpo.value
    };
    publicaciones.push(publicacion);
    crearPublicacion(publicacion);
    actualizarPublicaciones();
    inputUserId.value="";
    inputIdPost.value="";
    inputTitulo.value="";
    inputCuerpo.value="";
};

//crear un nuevo post/user

async function crearUsuario(user){
    fetch("usuario",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user)
    });
}

async function crearPublicacion(post){
    let response= await fetch(`/publicacion`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(post)
   });
   let r=await response.json();
   console.log(r);
}

//Buscar por id

  async function buscarUsuarioId() {
    let response=await fetch ("/usuario/"+ inputId.value);
    if(response.ok){
        usuarios=[];
        usuarios.push(await response.json());
        actualizarUsuarios();
    }
    inputId.value="";
}

async function buscarPostId() {
    let response=await fetch ("/publicacion/"+ inputIdPost.value);
    if(response.ok){
        publicaciones=[];
        publicaciones.push(await response.json());
        actualizarPublicaciones();
    }
    inputIdPost.value="";
}
//Buscar todos los posteos de un mismo usuario
async function buscarPostUser() {
    let response=await fetch ("/usuario/"+ inputUserId.value + "/post");
    if(response.ok){
        publicaciones=await response.json();
        actualizarPublicaciones();
    }
    inputUserId.value="";
}
//Modificar post/user
async function modificarUsuario() {
    try{
        let usuario={
            "id":inputId.value,
            "nombre":inputNombre.value,
            "email":inputEmail.value,
            "direccion":inputDireccion.value
        };
        let response=await fetch("/usuario/"+inputId.value,{
            method:`PUT`,
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify(usuario)
        });
        if(response.ok){
            loadUsuarios();
            inputId.value="";
            inputNombre.value="";
            inputEmail.value="";
            inputDireccion.value="";
        }else{
            contenido3.innerHTML="Error en lectura de servidor";
        }
    }catch(error){
        contenido3.innerHTML="Error en conexion al servidor";
    }  
}

async function modificarPost() {
    try{
        let publicacion={
            "userId":inputUserId.value,
            "id":inputIdPost.value,
            "titulo":inputTitulo.value,
            "cuerpo":inputCuerpo.value
        };
        let response=await fetch("/publicacion/"+inputIdPost.value,{
            method:`PUT`,
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify(publicacion)
        });
        if(response.ok){
            loadPublicaciones();
            inputUserId.value="";
            inputIdPost.value="";
            inputTitulo.value="";
            inputCuerpo.value="";
        }else{
            contenido4.innerHTML="Error en lectura de servidor";
        }
    }catch(error){
        contenido4.innerHTML="Error en conexion al servidor";
    }  
}



  


