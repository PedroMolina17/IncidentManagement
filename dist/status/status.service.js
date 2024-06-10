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
exports.StatusService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StatusService = class StatusService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createStatusDto) {
        return this.prisma.status.create({ data: createStatusDto });
    }
    findAll() {
        return this.prisma.status.findMany();
    }
    findOne(id) {
        return this.prisma.status.findUnique({ where: { status_id: id } });
    }
    update(id, updateStatusDto) {
        return this.prisma.status.update({
            where: { status_id: id },
            data: updateStatusDto,
        });
    }
    remove(id) {
        return this.prisma.status.delete({ where: { status_id: id } });
    }
};
exports.StatusService = StatusService;
exports.StatusService = StatusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StatusService);
//# sourceMappingURL=status.service.js.map