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
exports.IncidentTypesController = void 0;
const common_1 = require("@nestjs/common");
const incident_types_service_1 = require("./incident-types.service");
const create_incident_type_dto_1 = require("./dto/create-incident-type.dto");
const update_incident_type_dto_1 = require("./dto/update-incident-type.dto");
let IncidentTypesController = class IncidentTypesController {
    constructor(incidentTypesService) {
        this.incidentTypesService = incidentTypesService;
    }
    async create(createIncidentTypeDto) {
        return await this.incidentTypesService.create(createIncidentTypeDto);
    }
    async findAll() {
        return await this.incidentTypesService.findAll();
    }
    async findOne(id) {
        const incidentType = await this.incidentTypesService.findOne(id);
        if (!incidentType) {
            throw new common_1.NotFoundException(`incidentType with id ${id} not found`);
        }
        return incidentType;
    }
    async update(id, updateIncidentTypeDto) {
        try {
            const updateIncidentType = await this.incidentTypesService.update(id, updateIncidentTypeDto);
            if (!updateIncidentType) {
                throw new common_1.NotFoundException(`incidentType with id ${id} not found`);
            }
            return updateIncidentType;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`incidentType with id ${id} not found`);
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            const deleteIncidentType = await this.incidentTypesService.remove(id);
            if (!deleteIncidentType) {
                throw new common_1.NotFoundException(`incidentType with id ${id} not found`);
            }
            return deleteIncidentType;
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`incidentType with id ${id} not found`);
            }
            throw error;
        }
    }
};
exports.IncidentTypesController = IncidentTypesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_incident_type_dto_1.CreateIncidentTypeDto]),
    __metadata("design:returntype", Promise)
], IncidentTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IncidentTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IncidentTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_incident_type_dto_1.UpdateIncidentTypeDto]),
    __metadata("design:returntype", Promise)
], IncidentTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IncidentTypesController.prototype, "remove", null);
exports.IncidentTypesController = IncidentTypesController = __decorate([
    (0, common_1.Controller)('incident-types'),
    __metadata("design:paramtypes", [incident_types_service_1.IncidentTypesService])
], IncidentTypesController);
//# sourceMappingURL=incident-types.controller.js.map