import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Publicacion from './Publicacion';
import { PublicacionService } from './publicacion.service';

@Controller('publicacion')
export class PublicacionController {
    constructor(private readonly publicacionService:PublicacionService){}

    @Get()
    public getPublicaciones(){
        return this.publicacionService.getPublicaciones();
    }
    @Get(`:id`)
    public getPublicacionId(@Param(`id`)id):Publicacion{
        return this.publicacionService.getPublicacionId(parseInt(id));
    }

    @Post()
    create(@Body() publicacion:any):string{
        return this.publicacionService.create(publicacion);
    }
    @Delete(`:id`)
    public delPublicacion(@Param("id") id:string){
        return this.publicacionService.delPublicacion(parseInt(id));
    }
    @Put(`:id`)
    public modificarPublicacion(@Body()post:any,
    @Param(`id`) id):boolean{
        return this.publicacionService.modificarPublicacion(parseInt(id),post);
    }
}
