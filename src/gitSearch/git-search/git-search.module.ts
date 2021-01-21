import { Module } from '@nestjs/common';
import {SearchController} from './git-search.controller';
import { SearchService } from './git-search.service';
import { MongooseModule } from '@nestjs/mongoose';
import {GitSearchSchema} from '../schemas/gitSearch.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'git-search', schema: GitSearchSchema}])
    ],
    controllers: [SearchController],
    providers: [SearchService],
})
export class GitSearchModule {}
