import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { PublicacionController } from './publicacion/publicacion.controller';
import { PublicacionService } from './publicacion/publicacion.service';

@Module({
  imports: [ServeStaticModule.forRoot({rootPath:join(__dirname,"..","practicoFront")})],
  controllers: [AppController, UsuarioController, PublicacionController],
  providers: [AppService, UsuarioService, PublicacionService],
})
export class AppModule {}
