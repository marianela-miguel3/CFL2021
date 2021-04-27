let readlineSync = require("readline-sync");
let puesto = readlineSync.questionInt("Ingrese su numero de puesto de llegada: ");
switch (puesto) {
    case 1:
          console.log("Usted recibe Medalla de Oro");
          break;
    case 2:
          console.log("Usted recibe Medalla de Plata");
          break;
    case 3:
          console.log("Usted recibe Medalla de Bronce");
          break;
    default:
           console.log("Usted recibe Certificado de Participación");
}