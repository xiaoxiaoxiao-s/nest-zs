import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { NumController } from './num.controller';
import { NumService } from './num.service';
import { Num, NumSchema } from './num.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Num.name, schema: NumSchema }])],
  controllers: [NumController],
  providers: [NumService],
})
export class NumModule {}
