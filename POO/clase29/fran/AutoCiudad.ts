export default abstract class AutoCiudad{
    protected velocidadActual:number;
    private estaPrendido:boolean;

    public constructor(){
        this.velocidadActual=0;
        this.estaPrendido=false;
    }
    abstract acelerar():void;//sin llaves!!!

    public algo():void{
        console.log("hola");
    }
}