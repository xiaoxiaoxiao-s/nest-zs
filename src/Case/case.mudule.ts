import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CaseController } from './case.controller';
import { CaseService } from './case.service';
import { Case, CaseSchema } from './case.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Case.name, schema: CaseSchema }]),
  ],
  controllers: [CaseController],
  providers: [CaseService],
})
export class CaseModule {}
