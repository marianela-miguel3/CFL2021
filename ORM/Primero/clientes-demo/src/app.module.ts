import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { FacturaModule } from './factura/factura.module';
import { DetalleFacturaModule } from './detalle-factura/detalle-factura.module';
import { ProductoModule } from './producto/producto.module';
import { TelefonoModule } from './telefono/telefono.module';

@Module({
  imports: [ServeStaticModule.forRoot({rootPath:join(__dirname,"..","client"),
}),TypeOrmModule.forRoot(), ClienteModule, FacturaModule, DetalleFacturaModule, ProductoModule, TelefonoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
