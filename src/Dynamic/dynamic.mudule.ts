import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DynamicController } from './dynamic.controller';
import { DynamicService } from './dynamic.service';
import { Dynamic, DynamicSchema } from './dynamic.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dynamic.name, schema: DynamicSchema }]),
  ],
  controllers: [DynamicController],
  providers: [DynamicService],
})
export class DynamicModule {}
