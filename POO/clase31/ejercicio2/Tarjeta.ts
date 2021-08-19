class Tarjeta implements PaymentMethod {
    public pay(costo: number): void {
    console.log('Se pagó ' + costo + ' empleando tarjeta');
    }