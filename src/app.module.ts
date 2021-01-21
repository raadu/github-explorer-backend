import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GitSearchModule } from './gitSearch/git-search/git-search.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/github-explorer', { useNewUrlParser: true }),
    GitSearchModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
