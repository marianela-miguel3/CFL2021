class Efectivo implements PaymentMethod {
    public pay(costo: number): void {
    console.log('Se pagó ' + costo + ' empleando efectivo');
    }