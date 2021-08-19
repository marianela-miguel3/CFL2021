import Telefono from "./Telefono";
class SmartPhone implements Telefono {
  private estaPrendido: boolean;
  public constructor() {
    this.estaPrendido = this.estaPrendido;
  }
  public prender(): void {
    this.estaPrendido = true;
  }
  public apagar(): void {
    this.estaPrendido = false;
  }
  public llamar(numero: string): void {
    console.log(`Llamando a ${numero}`);
  }
  public sacarFoto(): void {
    console.log("espere....sacando foto");
  }
}
let miSmartPhone=new SmartPhone();
miSmartPhone.prender();//cuando llamo a las funciones si o si le agrego los parentesis sino no hace nada
console.log(miSmartPhone);
miSmartPhone.apagar();
miSmartPhone.llamar("245695");
miSmartPhone.sacarFoto();
console.log(miSmartPhone);
