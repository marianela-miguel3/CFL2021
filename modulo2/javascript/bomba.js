//let btns=document.querySelectorAll(".btn");
//for (let indice=0;i<length;indice++) {
//    btns.[i]
//}
let enviar=document.getElementById("enviar");
enviar.addEventListener("click", function (e) {
    let tiempoBomba=document.getElementById("tiempo").value;
    alert("Corra en 5 segundos se activará una bomba");
    setTimeout(function () {
        cuentaRegresiva(tiempoBomba); }, 5000);
    });

function cuentaRegresiva(tiempoBomba){ 
    let intervalo = setInterval(function() {
        document.getElementById("bomba").innerHTML= tiempoBomba;
    if (tiempoBomba === 0) {
        clearInterval(intervalo); // limpio inter
        document.getElementById("bomba").innerHTML="BOOOMMMM";
        let bomba=document.getElementById("bomba");
        bomba.classList.add("visible");
        let bombaImg=document.querySelector("#bombaImg");
        console.log(bombaImg);
        bombaImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSse-xHOm4QHO8zb5vzKCld_H5TyKC7E9JiUg&usqp=CAU";
        //bombaImg.classList.add("mostrar");
    } else {
    tiempoBomba--;
    }
    }, 1000);
    }
