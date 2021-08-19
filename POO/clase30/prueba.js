function sumar(a, b) {
    console.log(typeof a);
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("ambos debe ser numeros");
    }
    return (a + b);
}
var resultado = 0;
try {
    resultado = sumar(5, 0);
    console.log(resultado);
}
catch (error) {
    console.log("error de inputs");
    resultado = 0;
}
