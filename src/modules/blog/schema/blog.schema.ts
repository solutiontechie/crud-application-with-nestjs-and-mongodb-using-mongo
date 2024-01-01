import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class Blog {
    @Prop()
    title: string;
    @Prop()
    description: string;
    @Prop()
    author: string;
    @Prop()
    create_by: number;
    @Prop()
    create_at: string;

}
export const BlogSchema = SchemaFactory.createForClass(Blog);