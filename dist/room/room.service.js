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
exports.RoomService = void 0;
const prisma_service_1 = require("./../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let RoomService = class RoomService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRoomDto) {
        return await this.prisma.room.create({ data: createRoomDto });
    }
    async findAll() {
        return await this.prisma.room.findMany();
    }
    async findOne(id) {
        return await this.prisma.room.findUnique({ where: { room_id: id } });
    }
    async update(id, updateRoomDto) {
        return await this.prisma.room.update({
            where: { room_id: id },
            data: updateRoomDto,
        });
    }
    async remove(id) {
        return await this.prisma.room.delete({ where: { room_id: id } });
    }
};
exports.RoomService = RoomService;
exports.RoomService = RoomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoomService);
//# sourceMappingURL=room.service.js.map