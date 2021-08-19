class Cuenta {
    private lineItems: Item[] = [];

    public addLineItem(lineItem: Item): void {//agrega un item
    this.lineItems.push(lineItem);
    }
    public removeLineItem(lineItem: Item): void {//elimina un item
    for (let i = 0; i < this.lineItems.length; i++) {
    if (this.lineItems[i].equals(lineItem))
    this.lineItems.splice(i, 1);
    }
}
    public getCostInCents(): number {
    return this.lineItems
    .map(item => item.getCosto())//recorre el array de items y se queda con el costo, retornaria un nuevo array pero de numeros
    .reduce((a, b) => a + b, 0);//
    }
    public pay(method: PaymentMethod): void {
    method.pay(this.getCostInCents());
    }
}