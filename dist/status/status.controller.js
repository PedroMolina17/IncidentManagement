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
exports.StatusController = void 0;
const common_1 = require("@nestjs/common");
const status_service_1 = require("./status.service");
const create_status_dto_1 = require("./dto/create-status.dto");
const update_status_dto_1 = require("./dto/update-status.dto");
let StatusController = class StatusController {
    constructor(statusService) {
        this.statusService = statusService;
    }
    async create(createStatusDto) {
        return await this.statusService.create(createStatusDto);
    }
    async findAll() {
        return await this.statusService.findAll();
    }
    async findOne(id) {
        const status = await this.statusService.findOne(id);
        if (!status) {
            throw new common_1.NotFoundException(`status with id ${id} not found`);
        }
        return status;
    }
    async update(id, updateStatusDto) {
        try {
            const status = await this.statusService.update(id, updateStatusDto);
            if (!status) {
                throw new common_1.NotFoundException(`Status with id ${id} not found`);
            }
            return status;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Status with id ${id} not found`);
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            const status = await this.statusService.remove(id);
            if (!status) {
                throw new common_1.NotFoundException(`Status with id ${id} not found`);
            }
            return status;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Status with id ${id} not found`);
            }
            throw error;
        }
    }
};
exports.StatusController = StatusController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_status_dto_1.CreateStatusDto]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_status_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "remove", null);
exports.StatusController = StatusController = __decorate([
    (0, common_1.Controller)('status'),
    __metadata("design:paramtypes", [status_service_1.StatusService])
], StatusController);
//# sourceMappingURL=status.controller.js.map