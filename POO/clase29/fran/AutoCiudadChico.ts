import AutoCiudad from "./AutoCiudad";
class AutoCiudadChico extends AutoCiudad{
  public constructor(){
      super();
  }
  public acelerar():void{
      this.velocidadActual+=10;
  }
}