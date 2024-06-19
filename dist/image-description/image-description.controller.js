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
exports.ImageDescriptionController = void 0;
const image_description_helper_1 = require("./helper/image-description.helper");
const common_1 = require("@nestjs/common");
const image_description_service_1 = require("./image-description.service");
const create_image_description_dto_1 = require("./dto/create-image-description.dto");
const update_image_description_dto_1 = require("./dto/update-image-description.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ImageDescriptionController = class ImageDescriptionController {
    constructor(imageDescriptionService) {
        this.imageDescriptionService = imageDescriptionService;
    }
    async postImageDescription(file, body) {
        const filePath = `/public/images/image-description/${file.filename}`;
        const createImageDescriptionDto = {
            img_url: filePath,
            description: body.description,
        };
        const savedImage = await this.imageDescriptionService.create(createImageDescriptionDto);
        return savedImage;
    }
    async findAll() {
        return await this.imageDescriptionService.findAll();
    }
    findOne(id) {
        return this.imageDescriptionService.findOne(+id);
    }
    update(id, updateImageDescriptionDto) {
        return this.imageDescriptionService.update(+id, updateImageDescriptionDto);
    }
    remove(id) {
        return this.imageDescriptionService.remove(+id);
    }
};
exports.ImageDescriptionController = ImageDescriptionController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img_url', {
        storage: (0, multer_1.diskStorage)({
            destination: './public/images/image-description',
            filename: image_description_helper_1.renameImage,
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_image_description_dto_1.CreateImageDescriptionDto]),
    __metadata("design:returntype", Promise)
], ImageDescriptionController.prototype, "postImageDescription", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImageDescriptionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageDescriptionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_image_description_dto_1.UpdateImageDescriptionDto]),
    __metadata("design:returntype", void 0)
], ImageDescriptionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageDescriptionController.prototype, "remove", null);
exports.ImageDescriptionController = ImageDescriptionController = __decorate([
    (0, common_1.Controller)('image-description'),
    __metadata("design:paramtypes", [image_description_service_1.ImageDescriptionService])
], ImageDescriptionController);
//# sourceMappingURL=image-description.controller.js.map