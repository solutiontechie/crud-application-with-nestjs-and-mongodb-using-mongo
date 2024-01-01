import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateBlogDto } from '../dto/create.blog.dto';
import { UpdateBlogDto } from '../dto/update.blog.dto';
import { BlogService } from '../services/blog.service';
@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }
    @Post()
    async createBlog(@Res() response, @Body() createBlogDto: CreateBlogDto) {
        try {
            const newBlog = await this.blogService.createBlog(createBlogDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Blog has been created successfully',
                newBlog,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Blog not created!',
                error: 'Bad Request'
            });
        }
    }
    @Put('/:id')
    async updateBlog(@Res() response, @Param('id') blogId: string,
        @Body() updateBlogDto: UpdateBlogDto) {
        try {
            const existingBlog = await this.blogService.updateBlog(blogId, updateBlogDto);
            return response.status(HttpStatus.OK).json({
                message: 'Blog has been successfully updated',
                existingBlog,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get()
    async getBlogs(@Res() response) {
        try {
            const blogData = await this.blogService.getAllBlogs();
            return response.status(HttpStatus.OK).json({
                message: 'All blogs data found successfully', blogData,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get('/:id')
    async getBlog(@Res() response, @Param('id') blogId: string) {
        try {
            const existingBlog = await
                this.blogService.getBlog(blogId);
            return response.status(HttpStatus.OK).json({
                message: 'Blog found successfully', existingBlog,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Delete('/:id')
    async deleteBlog(@Res() response, @Param('id') blogId: string) {
        try {
            const deletedBlog = await this.blogService.deleteBlog(blogId);
            return response.status(HttpStatus.OK).json({
                message: 'Blog deleted successfully',
                deletedBlog,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}