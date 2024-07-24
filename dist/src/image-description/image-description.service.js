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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDescriptionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ImageDescriptionService = class ImageDescriptionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createImageDescriptionDto) {
        return await this.prisma.image_description.create({
            data: createImageDescriptionDto,
        });
    }
    async findAll() {
        return await this.prisma.image_description.findMany();
    }
    async findOne(id) {
        return await this.prisma.image_description.findUnique({
            where: { image_description_id: id },
        });
    }
    async update(id, updateImageDescriptionDto) {
        return await this.prisma.image_description.update({
            where: { image_description_id: id },
            data: updateImageDescriptionDto,
        });
    }
    async remove(id) {
        return await this.prisma.image_description.delete({
            where: { image_description_id: id },
        });
    }
};
exports.ImageDescriptionService = ImageDescriptionService;
exports.ImageDescriptionService = ImageDescriptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ImageDescriptionService);
//# sourceMappingURL=image-description.service.js.map