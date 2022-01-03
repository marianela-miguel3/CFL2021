import { Injectable } from '@nestjs/common';
import Publicacion from './Publicacion';
import * as FS from "fs";

@Injectable()
export class PublicacionService {
    private publicaciones:Publicacion[]=[];

    public constructor(){
        this.loadPublicaciones();
    }

    public getPublicacionUser(userId:number){
        let arrayUsers:Publicacion[]=[];
        for(let i=0;i<this.publicaciones.length;i++){
            if(this.publicaciones[i].getUserId()==userId){
                arrayUsers.push(this.publicaciones[i]);
            }
        }
        return arrayUsers;
    }

    public getPublicacionId(id:number){
        return this.publicaciones.find(publicacion=>publicacion.getId()==id);
    }
    
    public getPublicaciones():Publicacion[]{
        return this.publicaciones;
    }

    public modificarPublicacion(id:number, post:any):boolean{
        let posicion=this.publicaciones.findIndex(publicacion=>publicacion.getId()===id);
        if(posicion>-1){
            const publicacion= new Publicacion(post.userId,post.id,post.titulo,post.cuerpo);
            this.publicaciones[posicion]=publicacion;
            this.cargarPublicaciones();
            return true;
        }
        return false
    }

    public delPublicacion(id:number):void{
        let posicion=this.publicaciones.findIndex(publicacion=>publicacion.getId()==id);
        this.publicaciones.splice(posicion,1);
        this.cargarPublicaciones();
    }
   
    public create(post:any){
        const publicacion=new Publicacion(post["userId"],post["id"],post["titulo"],post["cuerpo"]);
        if(publicacion.getUserId() && publicacion.getId()&& publicacion.getTitulo() && publicacion.getCuerpo()) {
            this.publicaciones.push(publicacion);
            FS.appendFileSync("publicaciones.csv",
            "\n" + publicacion.getUserId() + "," + publicacion.getId() + "," + publicacion.getTitulo() + "," + publicacion.getCuerpo());
            this.cargarPublicaciones();
            return "ok";
        }
        return "parametros invalidos";
    }
    public cargarPublicaciones():void{
        let listaPublicaciones:string=``;
        for (let publicacion of this.publicaciones){
            listaPublicaciones+=`\r\n${publicacion.getUserId()},${publicacion.getId()},${publicacion.getTitulo()},${publicacion.getCuerpo()}`;
        }
        FS.writeFileSync(`publicaciones.csv`,listaPublicaciones.substr(2));
}
     private loadPublicaciones(): void{
        let archivo = FS.readFileSync('publicaciones.csv', 'utf8');
        const elementos = archivo.split('\n')
        .map(p => p.replace('\r', '')).map(p => p.split(','));
        for (let i = 0; i < elementos.length; i++) {
        let publicacion= new Publicacion(parseInt(elementos[i][0]),
        parseInt(elementos[i][1]),(elementos[i][2]),(elementos[i][3]) );
        this.publicaciones.push(publicacion);
        }
    }

}
