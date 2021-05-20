let readlineSync=require("readline-sync");
let num=new Array(5);
let indice=0;
while(indice<5) {
    num[indice]=readlineSync.questionInt("escriba el numero: ");
    indice++;
}
console.log(num);