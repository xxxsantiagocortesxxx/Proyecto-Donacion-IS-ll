import { Module } from '@nestjs/common';
import { FormModule } from './form/form.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/formsdb'), FormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
