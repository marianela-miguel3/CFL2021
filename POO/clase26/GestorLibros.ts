import * as RLS from 'readline-sync';
import * as FS from 'fs';
import Libro from "./Libro";
export default class GestorLibro {
    private libros: Libro[];
    public constructor (){
        this.libros = [];
    }
    public addLibro():void{//AGREGAR
        this.libros.push(this.crearLibro());
    }
    public findLibro(titulo:string):number{//BUSCAR
        
        for (let i = 0; i < this.libros.length; i++) {
            if(titulo == this.libros[i].getTitulo()){
                return i;
            }  
        }
                return -1;
    }
    public deleteLibro(titulo:string): void{//Elimina el libro deseado
        let posicion:number = this.findLibro(titulo);
        if (posicion != -1) {
            this.libros.splice(posicion,1);
        }
    }
    public updateLibro(libroViejo: string): void{//ACTUALIZAR
        let posicion= this.findLibro(libroViejo);
        if (posicion != -1) {//-1 lo devuelve cuando no encuentra lo que ingresa como busqueda
            this.libros[posicion] = this.crearLibro();
        }
        else{
            console.log("el libro no existe");
        }
    }
    mostrarLibros(): void{
        console.log(this.libros);
    }
    cargarLibros(rutaArchivo:string,separador:string):void{
        let libros:string[] = (FS.readFileSync(rutaArchivo,'utf8')).split(separador);
        let propiedadesLibro:string[] = [];
        libros.forEach(libroString => {
            propiedadesLibro = libroString.split(";")
            this.libros.push(new Libro(propiedadesLibro[0],propiedadesLibro[1],parseInt(propiedadesLibro[2]),propiedadesLibro[3],propiedadesLibro[4],propiedadesLibro[5],parseInt(propiedadesLibro[6])))
        });//parseInt me deja pasar un parametro number como string
    }
    private crearLibro():Libro {
        let titulo:string = RLS.question('Ingrese el titulo: ');
        let editorial:string = RLS.question('Ingrese la editorial: ');
        let anioEdicion:number = RLS.questionInt('Ingrese el anio: ');
        if(anioEdicion>2021){
            throw new Error("La fecha de edicion no puede ser mayor al año corriente: 2021 ");
        }
        let genero:string = RLS.question('Ingrese el genero: ');
        let idioma:string = RLS.question('Ingrese el idioma: ');
        let autor:string = RLS.question('Ingrese el autor: ');
        let precio: number = RLS.questionInt('Ingrese el precio: ');
        if(precio<=0){
            throw new Error("El precio debe ser mayor a $0 ");
        }

        let nuevoLibro:Libro=new Libro(titulo,editorial,anioEdicion,genero,idioma,autor,precio);
        //FS.writeFileSync("libro.txt",(`${titulo};${editorial};${anioEdicion};${genero};${idioma};${autor};${precio}`));
        //this.libros.push(nuevoLibro);
        //console.log(FS.readFileSync("libro.txt","utf8"));
        return nuevoLibro;
        try{  
        }catch (error){
            console.log("ocurrio un error esperado");
            console.log(error);
        }
    }

}