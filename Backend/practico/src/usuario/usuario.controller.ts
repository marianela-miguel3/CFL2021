import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    @Post()
    create(@Body() usuario:any):string{
        return this.usuarioService.create(usuario);
    }
}
