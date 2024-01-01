import { CreateBlogDto } from '../dto/create.blog.dto';
import { IBlog } from '../interface/blog.interface';
import { Model } from "mongoose";
import { UpdateBlogDto } from '../dto/update.blog.dto';
export declare class BlogService {
    private blogModel;
    constructor(blogModel: Model<IBlog>);
    createBlog(createBlogDto: CreateBlogDto): Promise<IBlog>;
    updateBlog(blogId: string, updateBlogDto: UpdateBlogDto): Promise<IBlog>;
    getAllBlogs(): Promise<IBlog[]>;
    getBlog(blogId: string): Promise<IBlog>;
    deleteBlog(blogId: string): Promise<IBlog>;
}
