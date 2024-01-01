"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const create_blog_dto_1 = require("../dto/create.blog.dto");
const update_blog_dto_1 = require("../dto/update.blog.dto");
const blog_service_1 = require("../services/blog.service");
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    async createBlog(response, createBlogDto) {
        try {
            const newBlog = await this.blogService.createBlog(createBlogDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Blog has been created successfully',
                newBlog,
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Blog not created!',
                error: 'Bad Request'
            });
        }
    }
    async updateBlog(response, blogId, updateBlogDto) {
        try {
            const existingBlog = await this.blogService.updateBlog(blogId, updateBlogDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Blog has been successfully updated',
                existingBlog,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getBlogs(response) {
        try {
            const blogData = await this.blogService.getAllBlogs();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All blogs data found successfully', blogData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getBlog(response, blogId) {
        try {
            const existingBlog = await this.blogService.getBlog(blogId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Blog found successfully', existingBlog,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async deleteBlog(response, blogId) {
        try {
            const deletedBlog = await this.blogService.deleteBlog(blogId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Blog deleted successfully',
                deletedBlog,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
exports.BlogController = BlogController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_blog_dto_1.CreateBlogDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "createBlog", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_blog_dto_1.UpdateBlogDto]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "updateBlog", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogs", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlog", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "deleteBlog", null);
exports.BlogController = BlogController = __decorate([
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
//# sourceMappingURL=blog.controller.js.map