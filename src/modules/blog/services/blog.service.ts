import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBlogDto } from '../dto/create.blog.dto';
import { IBlog } from '../interface/blog.interface';
import { Model } from "mongoose";
import { UpdateBlogDto } from '../dto/update.blog.dto';
@Injectable()
export class BlogService {
    constructor(@InjectModel('Blog') private blogModel: Model<IBlog>) { }
    async createBlog(createBlogDto: CreateBlogDto): Promise<IBlog> {
        const newBlog = await new this.blogModel(createBlogDto);
        return newBlog.save();
    }
    async updateBlog(blogId: string, updateBlogDto: UpdateBlogDto): Promise<IBlog> {
        const existingBlog = await this.blogModel.findByIdAndUpdate(blogId, updateBlogDto, { new: true });
        if (!existingBlog) {
            throw new NotFoundException(`Blog #${blogId} not found`);
        }
        return existingBlog;
    }
    async getAllBlogs(): Promise<IBlog[]> {
        const blogData = await this.blogModel.find();
        if (!blogData || blogData.length == 0) {
            throw new NotFoundException('Blogs data not found!');
        }
        return blogData;
    }
    async getBlog(blogId: string): Promise<IBlog> {
        const existingBlog = await this.blogModel.findById(blogId).exec();
        if (!existingBlog) {
            throw new NotFoundException(`Blog #${blogId} not found`);
        }
        return existingBlog;
    }
    async deleteBlog(blogId: string): Promise<IBlog> {
        const deletedBlog = await this.blogModel.findByIdAndDelete(blogId);
        if (!deletedBlog) {
            throw new NotFoundException(`Blog #${blogId} not found`);
        }
        return deletedBlog;
    }
}