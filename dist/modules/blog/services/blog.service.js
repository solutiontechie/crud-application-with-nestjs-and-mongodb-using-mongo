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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BlogService = class BlogService {
    constructor(blogModel) {
        this.blogModel = blogModel;
    }
    async createBlog(createBlogDto) {
        const newBlog = await new this.blogModel(createBlogDto);
        return newBlog.save();
    }
    async updateBlog(blogId, updateBlogDto) {
        const existingBlog = await this.blogModel.findByIdAndUpdate(blogId, updateBlogDto, { new: true });
        if (!existingBlog) {
            throw new common_1.NotFoundException(`Blog #${blogId} not found`);
        }
        return existingBlog;
    }
    async getAllBlogs() {
        const blogData = await this.blogModel.find();
        if (!blogData || blogData.length == 0) {
            throw new common_1.NotFoundException('Blogs data not found!');
        }
        return blogData;
    }
    async getBlog(blogId) {
        const existingBlog = await this.blogModel.findById(blogId).exec();
        if (!existingBlog) {
            throw new common_1.NotFoundException(`Blog #${blogId} not found`);
        }
        return existingBlog;
    }
    async deleteBlog(blogId) {
        const deletedBlog = await this.blogModel.findByIdAndDelete(blogId);
        if (!deletedBlog) {
            throw new common_1.NotFoundException(`Blog #${blogId} not found`);
        }
        return deletedBlog;
    }
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Blog')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogService);
//# sourceMappingURL=blog.service.js.map