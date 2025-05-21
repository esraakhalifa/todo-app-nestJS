import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TodoModule, MongooseModule.forRoot('mongodb://localhost:27017/nest-todos'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
