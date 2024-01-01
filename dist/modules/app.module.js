"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const student_controller_1 = require("../modules/student/controllers/student.controller");
const student_schema_1 = require("../modules/student/schema/student.schema");
const student_service_1 = require("../modules/student/services/student.service");
const blog_controller_1 = require("./blog/controller/blog.controller");
const blog_service_1 = require("./blog/services/blog.service");
const blog_schema_1 = require("./blog/schema/blog.schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                ignoreEnvFile: true
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/studentdb'),
            mongoose_1.MongooseModule.forFeature([{ name: 'Student', schema: student_schema_1.StudentSchema }, { name: 'Blog', schema: blog_schema_1.BlogSchema }]),
        ],
        controllers: [app_controller_1.AppController, student_controller_1.StudentController, blog_controller_1.BlogController],
        providers: [app_service_1.AppService, student_service_1.StudentService, blog_service_1.BlogService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map