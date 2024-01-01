"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const blog_module_1 = require("./modules/blog/blog.module");
const student_module_1 = require("./modules/student/student.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const configService = app.get(config_1.ConfigService);
    const routePrefix = configService.get('server.routePrefix') || '';
    app.setGlobalPrefix(routePrefix);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(function (request, response, next) {
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        next();
    });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Self CURD App')
        .setDescription('API Documentation')
        .setVersion('1.0.0')
        .addBearerAuth()
        .addApiKey()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options, {
        include: [app_module_1.AppModule, student_module_1.StudentModule, blog_module_1.BlogModule]
    });
    swagger_1.SwaggerModule.setup(routePrefix + '/swagger', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map