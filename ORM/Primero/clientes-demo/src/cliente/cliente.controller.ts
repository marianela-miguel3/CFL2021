import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import ClienteDTO from './cliente.dto';
import Cliente from './cliente.entity';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService:ClienteService){}

    @Get()
    public async getClientes():Promise<Cliente[]>{
        return await this.clienteService.getClientes();
    }
    @Get(`:id`)
    public async getCliente(@Param(`id`) id:string):Promise<Cliente>{
        return await this.clienteService.getCliente(parseInt(id));
    }

    @Post()
    public async addCliente(@Body()clienteDTO:ClienteDTO):Promise<Cliente[]>{
        return await this.clienteService.addCliente(clienteDTO);
    }

    @Put()
    public async updateCliente(@Body() clienteDTO:ClienteDTO):Promise<Cliente[]>{
        return await this.clienteService.updateCliente(clienteDTO);
    }

    @Delete(`:id`)
    public delCliente(@Param("id") id:string):Promise<Cliente[]>{
        return this.clienteService.delCliente(parseInt(id));
    }

}
