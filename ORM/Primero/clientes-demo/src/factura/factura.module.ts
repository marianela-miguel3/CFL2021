import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ClienteController } from 'src/cliente/cliente.controller';
import Cliente from 'src/cliente/cliente.entity';
import { ClienteService } from 'src/cliente/cliente.service';
import Detalle_Factura from 'src/detalle-factura/detalleFactura.entity';
import { FacturaController } from './factura.controller';
import Factura from './factura.entity';
import { FacturaService } from './factura.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Factura,Cliente,Detalle_Factura])
],
  controllers: [FacturaController,ClienteController],
  providers: [FacturaService,ClienteService]
})
export class FacturaModule {}

