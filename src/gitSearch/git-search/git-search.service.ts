import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GitSearch } from '../interfaces/gitSearch.interface';
import { CreateSearchDTO } from '../dto/create-search.dto';

@Injectable()
export class SearchService {
    constructor(@InjectModel('git-search') private readonly searchModel: Model<GitSearch>) { }
    // fetch all search data
    async getAllSearch(): Promise<GitSearch[]> {
        const search = await this.searchModel.find().exec();
        return search;
    }
    // post a single search data
    async addSearch(CreateSearchDTO: CreateSearchDTO): Promise<GitSearch> {
        const newSearch = await new this.searchModel(CreateSearchDTO);
        return newSearch.save();
    }
    // Edit search data
    async updateCustomer(searchID, CreateSearchDTO: CreateSearchDTO): Promise<GitSearch> {
        const updatedSearch = await this.searchModel
            .findByIdAndUpdate(searchID, CreateSearchDTO, { new: true });
        return updatedSearch;
    }
    // Delete a search
    async deleteSearch(searchID): Promise<any> {
        const deletedSearch = await this.searchModel.findByIdAndRemove(searchID);
        return deletedSearch;
    }
}