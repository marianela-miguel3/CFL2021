class Lampara {
    estaPrendida: boolean;
    intensidad: number;

    constructor(estadoInicial:boolean, intensidadInicial:number) {
        this.estaPrendida=estadoInicial;
        this.intensidad=intensidadInicial;
    }
    encenderApagar(): void{
        if (this.estaPrendida)
           this.estaPrendida=false
        else
            this.estaPrendida=true
    }

    subirIntensidad(): void {
        this.intensidad=this.intensidad+1
    }

    bajarIntensidad(): void {
        this.intensidad=this.intensidad-1
    }
    mostrarLampara(): void {
        console.log(`Mi lampara esta encendida ${this.estaPrendida} con intensidad ${this.intensidad}`);
    }
}
let estadoInicial:boolean=true;
let intensidadInicial:number=10;
let miLampara=new Lampara(estadoInicial,intensidadInicial);
miLampara.mostrarLampara();
miLampara.bajarIntensidad();
miLampara.mostrarLampara();