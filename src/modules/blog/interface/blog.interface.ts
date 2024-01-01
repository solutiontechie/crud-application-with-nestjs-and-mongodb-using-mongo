import { Document } from 'mongoose';
export interface IBlog extends Document {
    readonly title: string;
    readonly description: string;
    readonly create_by: number;
    readonly create_at: string;

}