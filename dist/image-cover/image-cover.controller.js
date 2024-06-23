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
let ImageCoverController = class ImageCoverController {
    constructor(imageCoverService) {
        this.imageCoverService = imageCoverService;
    }
    create(createImageCoverDto) {
        return this.imageCoverService.create(createImageCoverDto);
    }
    findAll() {
        return this.imageCoverService.findAll();
    }
    findOne(id) {
        return this.imageCoverService.findOne(+id);
    }
    update(id, updateImageCoverDto) {
        return this.imageCoverService.update(+id, updateImageCoverDto);
    }
    remove(id) {
        return this.imageCoverService.remove(+id);
    }
};
exports.ImageCoverController = ImageCoverController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_image_cover_dto_1.CreateImageCoverDto]),
    __metadata("design:returntype", void 0)
], ImageCoverController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageCoverController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageCoverController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_image_cover_dto_1.UpdateImageCoverDto]),
    __metadata("design:returntype", void 0)
], ImageCoverController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ImageCoverController.prototype, "remove", null);
exports.ImageCoverController = ImageCoverController = __decorate([
    (0, common_1.Controller)('image-cover'),
    __metadata("design:paramtypes", [image_cover_service_1.ImageCoverService])
], ImageCoverController);
//# sourceMappingURL=image-cover.controller.js.map