import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Usuario from './Usuario';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService:UsuarioService){}
    @Get()
    public getUsuarios(){
        return this.usuarioService.getUsuarios();
    }
    @Get(`:id`)
    public getUsuario(@Param(`id`)id):Usuario{
        return this.usuarioService.getUsuario(parseInt(id));
    }
    @Get(`:id/post`)
    public getUsuariosPost(@Param(`id`)id):any[]{
        return this.usuarioService.getUsuariosPost(parseInt(id));
    }
    @Put(`:id`)
    public modificarUsuario(@Body()user:any,
    @Param(`id`) id):boolean{
        return this.usuarioService.modificarUsuario(parseInt(id),user);
    }

    @Post()
    public create(@Body() usuario:any):string{
        return this.usuarioService.create(usuario);
    }
    @Delete(`:id`)
    public delUsuario(@Param("id") id:string){
        return this.usuarioService.delUsuario(parseInt(id));
    }
}
