import { Module } from '@nestjs/common';
import { AmbassadorController } from './ambassador.controller';
import { AmbassadorService } from './ambassador.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ambassador, AmbassadorSchema } from 'schema/ambassador.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ambassador.name, schema: AmbassadorSchema },
    ]),
  ],
  controllers: [AmbassadorController],
  providers: [AmbassadorService],
})
export class AmbassadorModule {}
