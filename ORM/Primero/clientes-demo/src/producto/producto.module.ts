import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Detalle_Factura from 'src/detalle-factura/detalleFactura.entity';
import { ProductoController } from './producto.controller';
import Producto from './producto.entity';
import { ProductoService } from './producto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto,Detalle_Factura])
],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}
