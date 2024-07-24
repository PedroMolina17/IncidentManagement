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
exports.IncidentsController = void 0;
const common_1 = require("@nestjs/common");
const incidents_service_1 = require("./incidents.service");
const create_incident_dto_1 = require("./dto/create-incident.dto");
const update_incident_dto_1 = require("./dto/update-incident.dto");
let IncidentsController = class IncidentsController {
    constructor(incidentsService) {
        this.incidentsService = incidentsService;
    }
    async create(createIncidentDto) {
        try {
            return await this.incidentsService.create(createIncidentDto);
        }
        catch (error) {
            if (error.code) {
                throw new common_1.NotFoundException('Foreign Key does not exist');
            }
        }
    }
    async findAll() {
        return await this.incidentsService.findAll();
    }
    async findOne(id) {
        const incidentsService = await this.incidentsService.findOne(id);
        if (!incidentsService) {
            throw new common_1.NotFoundException(`Incident with id ${id} not found`);
        }
        return incidentsService;
    }
    async update(id, updateIncidentDto) {
        try {
            const incidentsService = await this.incidentsService.update(id, updateIncidentDto);
            return incidentsService;
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
            return await this.incidentsService.remove(+id);
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Status with id ${id} not found`);
            }
        }
    }
};
exports.IncidentsController = IncidentsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_incident_dto_1.CreateIncidentDto]),
    __metadata("design:returntype", Promise)
], IncidentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IncidentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IncidentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_incident_dto_1.UpdateIncidentDto]),
    __metadata("design:returntype", Promise)
], IncidentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IncidentsController.prototype, "remove", null);
exports.IncidentsController = IncidentsController = __decorate([
    (0, common_1.Controller)('incidents'),
    __metadata("design:paramtypes", [incidents_service_1.IncidentsService])
], IncidentsController);
//# sourceMappingURL=incidents.controller.js.map