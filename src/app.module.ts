import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AdminModule } from './Admin/admin.mudule';
import { CaseModule } from './Case/case.mudule';
import { DynamicModule } from './Dynamic/dynamic.mudule';
import { NumModule } from './Num/num.mudule';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://zsAdmin:Unicorn123@101.200.160.44:27777/zs',
      {
        authMechanism: 'DEFAULT',
      },
    ),
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/zs'),
    AdminModule,
    CaseModule,
    DynamicModule,
    NumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
