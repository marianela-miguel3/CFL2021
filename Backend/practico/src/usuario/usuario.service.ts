import { Injectable } from '@nestjs/common';
import Usuario from './Usuario';
import * as FS from "fs";
import Publicacion from 'src/publicacion/Publicacion';
import { PublicacionService } from 'src/publicacion/publicacion.service';

@Injectable()
export class UsuarioService {
    private usuarios:Usuario[]=[];
    //private posts:Publicacion[];
    
    public constructor(private readonly publicacionService:PublicacionService){
        this.loadUsuarios();
        //this.posts=[];
    }


    // private cargarUsuarios(){
    //     let archivo=FS.readFileSync(`usuarios.csv`,`utf-8`);
    //     this.usuarios=archivo.split(`\r\n`).map(linea=> linea.split(`,`)).map(dato=>new Usuario(parseInt(dato[0]),dato[1],dato[2],dato[3]));
    // }
    public getUsuario(id:number){
        return this.usuarios.find(usuario=>usuario.getId()==id);
    }
    public getUsuarios():Usuario[]{
        return this.usuarios;
    }
    public getUsuariosPost(id):any[]{
        return this.publicacionService.getPublicacionUser(id);
        // let arrayPostUser:[]=[];
        // for(let i=0;i<this.usuarios.length;i++){
        //     if(this.publicacionService.getPublicacionUser(id)==id){
        //         arrayPostUser.push(this.publicaciones[i]);
        //     }
        // }
        // return arrayPostUser;

    }
   
    // private guardarDatosUsuarios():void{
    //     let datos:string=``;
    //     for (let usuario of this.usuarios) {
    //         datos+=`\r\n${usuario.getId()},${usuario.getNombre()},${usuario.getEmail()},${usuario.getDireccion()`;
    //     }
    //     FS.writeFileSync(``,datos.substr(2));
    public create(user:any){
        const usuario=new Usuario(user["id"],user["nombre"],user["email"],user["direccion"]);
        if(usuario.getId() && usuario.getNombre()&& usuario.getEmail() && usuario.getDireccion()) {
            this.usuarios.push(usuario);
            FS.appendFileSync("usuarios.csv",
            "\n" + usuario.getId() + "," + usuario.getNombre() + "," + usuario.getEmail() + "," + usuario.getDireccion());
            this.cargarUsuarios();
            return "ok";
        }
        return "parametros invalidos";
    }

    public delUsuario(id:number):void{
        let posicion=this.usuarios.findIndex(usuario=>usuario.getId()==id);
        this.usuarios.splice(posicion,1);
        this.cargarUsuarios();
    }

    public cargarUsuarios():void{
        let listaUsuarios:string=``;
        for (let usuario of this.usuarios){
            listaUsuarios+=`\r\n${usuario.getId()},${usuario.getNombre()},${usuario.getEmail()},${usuario.getDireccion()}`;
        }
        FS.writeFileSync(`usuarios.csv`,listaUsuarios.substr(2));
}

public modificarUsuario(id:number, user:any):boolean{
    let posicion=this.usuarios.findIndex(usuario=>usuario.getId()===id);
    if(posicion>-1){
        const usuario= new Usuario(user.id,user.nombre,user.email,user.direccion);
        this.usuarios[posicion]=usuario;
        this.cargarUsuarios();
        return true;
    }
    return false
}


    private loadUsuarios(): void{
        let archivo = FS.readFileSync('usuarios.csv', 'utf8');
        const elementos = archivo.split('\n')
        .map(p => p.replace('\r', '')).map(p => p.split(','));
        for (let i = 0; i < elementos.length; i++) {
        let usuario= new Usuario(parseInt(elementos[i][0]),
        elementos[i][1], (elementos[i][2]),(elementos[i][3]) );
        this.usuarios.push(usuario);
        }
        //console.log(this.usuarios);
    }
}
