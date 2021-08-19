export default interface Auto{//es como definir un contrato, significa que todas las clases que usen la interfase 
    //auto deben cumplir esos requisitos
    acelerar(x:number,y:number):void;
    getVelocidadActual():number;
}