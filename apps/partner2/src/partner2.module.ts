import { Module } from '@nestjs/common';
import { Partner2Controller } from './partner2.controller';
import { Partner2Service } from './partner2.service';
import { ConfigModule } from '@nestjs/config';
import { EventosModule } from './eventos/eventos.module';
import { PrismaModule } from '@app/core/prisma/prisma.module';
import { LugaresModule } from './lugares/lugares.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env.partner2'}),
    PrismaModule,
    EventosModule,
    LugaresModule
  ],
  controllers: [Partner2Controller],
  providers: [Partner2Service],
})
export class Partner2Module {}
