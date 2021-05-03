function calcularAreaTriangulo(base, altura) {
    return ((base*altura)/2);
};
contador=1;
for (contador=1; contador<=100;contador++) {
    console.log("El area es =", calcularAreaTriangulo(contador,contador*2));
}