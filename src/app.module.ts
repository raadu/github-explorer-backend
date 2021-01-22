import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GitSearchModule } from './gitSearch/git-search/git-search.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.DB_URI,
      { useNewUrlParser: true }
    ),
    GitSearchModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
