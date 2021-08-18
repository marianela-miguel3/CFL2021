import PistaDeAudio from "./PistaDeAudio";
import Playlist from "./PlayList";

let playlist= new Playlist();
let pistaDeAudio1=new PistaDeAudio("las olas y el viento","manzanero");
let pistaDeAudio2=new PistaDeAudio("los dias sin ti","shakira");
playlist.agregarLista(pistaDeAudio1);
playlist.agregarLista(pistaDeAudio2);
playlist.cantidadPistas();
playlist.getDuracion();
playlist.mostrarPistas();