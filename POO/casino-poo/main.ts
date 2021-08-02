import Casino from "./casino";
import * as RLS from "readline-sync";
let casino:Casino=new Casino();
casino.mostrarInfo("casino.txt");
let opcionJuego:string=RLS.question("A que juego desea jugar? (presione T para jugar al Tragamonedas, TE para jugar al Tragamonedas especial, R para Ruleta o M para Mayormenor), presione X para finalizar: ").toUpperCase();
while (opcionJuego!="X"){
    switch(opcionJuego){
        case "T":{
            casino.mostrarInfo("tragamonedas.txt");
            casino.jugarTragamonedas();
            break;
        }
        case "TE":{
            casino.mostrarInfo("tragamonedas.txt");
            casino.jugarTragamonedasEspecial();
            break;
        }
        case "R":{
            casino.mostrarInfo("ruleta.txt");
            casino.jugarRuleta();
            break;
        }
        case "M":{
            casino.mostrarInfo("mayorMenor.txt");
            casino.jugarMayorMenor();
            break;
        }
    }
    opcionJuego=RLS.question("A que juego desea jugar(T-tragamonedas/TE-tragamonedas especial/M-mayorMenor/R-ruleta), presione X para finalizar: ").toUpperCase();
}












