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
exports.ImageCoverController = void 0;
const common_1 = require("@nestjs/common");
const image_cover_service_1 = require("./image-cover.service");
const create_image_cover_dto_1 = require("./dto/create-image-cover.dto");
const update_image_cover_dto_1 = require("./dto/update-image-cover.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const image_description_helper_1 = require("./helper/image-description.helper");
let ImageCoverController = class ImageCoverController {
    constructor(imageCoverService) {
        this.imageCoverService = imageCoverService;
    }
    async postImageDescription(file, body) {
        if (!file) {
            throw new common_1.BadRequestException('File is missing');
        }
        const filePath = `/images/image-cover/${file.filename}`;
        const createImageCoverDto = {
            img_url: filePath,
            description: body.description,
        };
        const savedImage = await this.imageCoverService.create(createImageCoverDto);
        return savedImage;
    }
    findAll() {
        return this.imageCoverService.findAll();
    }
    async findOne(id) {
        const imageDescription = await this.imageCoverService.findOne(id);
        if (!imageDescription) {
            throw new common_1.NotFoundException(`imageDescription with id ${id} not found`);
        }
        return imageDescription;
    }
    async update(file, id, body) {
        try {
            let updateImageCoverDto = {
                description: body.description,
            };
            if (file) {
                const filePath = `/public/images/image-cover/${file.filename}`;
                updateImageCoverDto.img_url = filePath;
            }
            const ImageDescription = await this.imageCoverService.update(id, updateImageCoverDto);
            if (!ImageDescription) {
                throw new common_1.NotFoundException(`ImageDescription with id ${id} not found`);
            }
            return ImageDescription;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`ImageDescription with id ${id} not found`);
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            const imageDescription = await this.imageCoverService.remove(id);
            if (!imageDescription) {
                throw new common_1.NotFoundException(`ImageDescription with id ${id} not found`);
            }
            return imageDescription;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`ImageDescription with id ${id} not found`);
            }
            throw error;
        }
    }
};
exports.ImageCoverController = ImageCoverController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img_url', {
        storage: (0, multer_1.diskStorage)({
            destination: './public/images/image-cover',
            filename: image_description_helper_1.renameImage,
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_image_cover_dto_1.CreateImageCoverDto]),
    __metadata("design:returntype", Promise)
], ImageCoverController.prototype, "postImageDescription", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageCoverController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImageCoverController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img_url', {
        storage: (0, multer_1.diskStorage)({
            destination: './public/images/image-cover',
            filename: image_description_helper_1.renameImage,
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_image_cover_dto_1.UpdateImageCoverDto]),
    __metadata("design:returntype", Promise)
], ImageCoverController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImageCoverController.prototype, "remove", null);
exports.ImageCoverController = ImageCoverController = __decorate([
    (0, common_1.Controller)('image-cover'),
    __metadata("design:paramtypes", [image_cover_service_1.ImageCoverService])
], ImageCoverController);
//# sourceMappingURL=image-cover.controller.js.map