import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { SearchService } from '../git-search/git-search.service';
import { CreateSearchDTO } from '../dto/create-search.dto';

@Controller('git-search')
export class SearchController {
    constructor(private searchService: SearchService) { }

    // add a search
    @Post('/create')
    async addSearch(@Res() res, @Body() CreateSearchDTO: CreateSearchDTO) {
        const search = await this.searchService.addSearch(CreateSearchDTO);
        return res.status(HttpStatus.OK).json({
            message: "Search has been created successfully",
            search
        })
    }

    // Retrieve search list
    @Get('search')
    async getAllSearch(@Res() res) {
        const search = await this.searchService.getAllSearch();
        return res.status(HttpStatus.OK).json(search);
    }
}