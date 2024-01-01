import { CreateBlogDto } from '../dto/create.blog.dto';
import { UpdateBlogDto } from '../dto/update.blog.dto';
import { BlogService } from '../services/blog.service';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    createBlog(response: any, createBlogDto: CreateBlogDto): Promise<any>;
    updateBlog(response: any, blogId: string, updateBlogDto: UpdateBlogDto): Promise<any>;
    getBlogs(response: any): Promise<any>;
    getBlog(response: any, blogId: string): Promise<any>;
    deleteBlog(response: any, blogId: string): Promise<any>;
}
