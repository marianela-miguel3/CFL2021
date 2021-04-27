let readlineSync = require("readline-sync");
let puesto =readlineSync.questionInt("Ingrese su numero de puesto de llegada: ");
if (puesto=="1"){
    console.log("Usted ha ganado medalla de oro");
} else {
    if (puesto=="2"){
        console.log("Usted ha ganado medalla de plata");
    } else {
        if (puesto=="3"){
           console.log("Usted ha ganado medalla de bronce");
        } else {
             console.log("Usted recibe Certificado de Participación");
        }
    }
}