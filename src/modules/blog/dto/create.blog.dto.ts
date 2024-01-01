import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'
export class CreateBlogDto {
    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    readonly title: string

    @IsString()
    @IsNotEmpty()
    readonly description: string

    @IsString()
    @IsNotEmpty()
    readonly author: string

    @IsNumber()
    @IsNotEmpty()
    readonly created_by: number

    @IsString()
    @IsNotEmpty()
    readonly create_at: string


}