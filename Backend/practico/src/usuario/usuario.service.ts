import { Injectable } from '@nestjs/common';
import Usuario from './Usuario';
import * as FS from "fs";

@Injectable()
export class UsuarioService {
    private usuarios:Usuario[]=[];

    public constructor(){
        this.loadUsuarios();
    }
    // private cargarUsuarios(){
    //     let archivo=FS.readFileSync(`usuarios.csv`,`utf-8`);
    //     this.usuarios=archivo.split(`\r\n`).map(linea=> linea.split(`,`)).map(dato=>new Usuario(parseInt(dato[0]),dato[1],dato[2],dato[3]));
    // }
    public getUsuario(id:number){
        return this.usuarios.find(usuario=>usuario.getId()==id);
    }
    public getUsuarios():Usuario[]{
        console.log(this.usuarios);
        return this.usuarios;
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
    public cargarUsuarios():void{
        let listaUsuarios:string=``;
        for (let usuario of this.usuarios){
            listaUsuarios+=`\r\n${usuario.getId()},${usuario.getNombre()},${usuario.getEmail()},${usuario.getDireccion()}`;
        }
        FS.writeFileSync(`usuarios.csv`,listaUsuarios.substr(2));
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
