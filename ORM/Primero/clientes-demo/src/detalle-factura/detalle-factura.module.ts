import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Factura from 'src/factura/factura.entity';
import { FacturaService } from 'src/factura/factura.service';
import Producto from 'src/producto/producto.entity';
import { ProductoService } from 'src/producto/producto.service';
import { DetalleFacturaController } from './detalle-factura.controller';
import { DetalleFacturaService } from './detalle-factura.service';
import Detalle_Factura from './detalleFactura.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Detalle_Factura,Factura,Producto])
],
  controllers: [DetalleFacturaController],
  providers: [DetalleFacturaService]
})
export class DetalleFacturaModule {}
