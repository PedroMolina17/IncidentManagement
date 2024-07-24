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
exports.IncidentsService = void 0;
const prisma_service_1 = require("./../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let IncidentsService = class IncidentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createIncidentDto) {
        return await this.prisma.incidents.create({ data: createIncidentDto });
    }
    async findAll() {
        return await this.prisma.incidents.findMany();
    }
    async findOne(id) {
        return await this.prisma.incidents.findUnique({
            where: { incidents_id: id },
        });
    }
    async update(id, updateIncidentDto) {
        return await this.prisma.incidents.update({
            where: { incidents_id: id },
            data: updateIncidentDto,
        });
    }
    async remove(id) {
        return await this.prisma.incidents.delete({ where: { incidents_id: id } });
    }
};
exports.IncidentsService = IncidentsService;
exports.IncidentsService = IncidentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], IncidentsService);
//# sourceMappingURL=incidents.service.js.map