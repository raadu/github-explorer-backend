import { Document } from 'mongoose';

export interface GitSearch extends Document {
    readonly name: String;
    readonly created_at: Date;
}