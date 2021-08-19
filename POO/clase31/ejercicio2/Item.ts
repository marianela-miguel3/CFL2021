class Item {
    private descripcion: string;
    private costo: number;
    public constructor(descripcion: string, costo: number) {
    this.descripcion = descripcion;
    this.costo = costo;
    }
    public getDescripcion(): string { return this.descripcion; }//me muestra la descripcion
    public getCosto(): number { return this.costo; }//me muestra el costo
    public setDescripcion(descripcion: string): void { this.descripcion = descripcion; }//seteo la descripcion del item
    public setCosto(costo: number): void { this.costo = costo; }//sete el costo
    public equals(i: Item): boolean {//ingresa un item por parametro y compara costo y descripcion de dos objetos
    return this.costo == i.getCosto() && this.descripcion == i.getDescripcion();
    }