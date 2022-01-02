import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Telefono from './telefono.entity';
import { TelefonoService } from './telefono.service';
import TelefonoDTO from './telefonoDTO';

@Controller('telefono')
export class TelefonoController {
    constructor(private readonly telefonoService:TelefonoService){}

    @Get()
    public async getTelefonos():Promise<Telefono[]>{
        return await this.telefonoService.getTelefonos();
    }

    @Get(`:codigo_area/:nro_telefono`)
    public async getTelefono(@Param(`codigo_area`) codigo_area:string, @Param(`nro_telefono`) nro_telefono:string):Promise<Telefono>{
        return await this.telefonoService.getTelefono(parseInt(codigo_area),parseInt(nro_telefono));
    }

    @Post()
    public async addTelefono(@Body()telefonoDTO:TelefonoDTO):Promise<Telefono[]>{
        return await this.telefonoService.addTelefono(telefonoDTO);
    }

    @Put()
    public async updateTelefono(@Body() telefonoDTO:TelefonoDTO):Promise<Telefono[]>{
        return await this.telefonoService.updateTelefono(telefonoDTO);
    }
    @Delete(`:codigo_area/:nro_telefono`)
    public delTelefono(@Param("codigo_area") codigo_area:string, @Param("nro_telefono")nro_telefono:string):Promise<Telefono[]>{
        return this.telefonoService.delTelefono(parseInt(codigo_area),parseInt(nro_telefono));
    }
}


