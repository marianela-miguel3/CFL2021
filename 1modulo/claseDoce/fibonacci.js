function calcularFibonacci(n) {
   let resultado=0;
   if (n>1) {
       resultado=calcularFibonacci(n-1) + calcularFibonacci(n-2);
    } else {
       resultado=1;
    return resultado;
}