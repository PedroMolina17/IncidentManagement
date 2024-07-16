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
exports.RoomController = void 0;
const common_1 = require("@nestjs/common");
const room_service_1 = require("./room.service");
const create_room_dto_1 = require("./dto/create-room.dto");
const update_room_dto_1 = require("./dto/update-room.dto");
let RoomController = class RoomController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    async create(createRoomDto) {
        try {
            await this.roomService.create(createRoomDto);
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.NotFoundException(`Room with name ${createRoomDto.name} already exists`);
            }
        }
    }
    async findAll() {
        return await this.roomService.findAll();
    }
    async findOne(id) {
        try {
            const room = await this.roomService.findOne(id);
            if (!room) {
                throw new common_1.NotFoundException(`Room with id ${id} not found`);
            }
            return room;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateRoomDto) {
        try {
            const room = await this.roomService.update(id, updateRoomDto);
            if (!room) {
                throw new common_1.NotFoundException(`incidentType with id ${id} not found`);
            }
            return room;
        }
        catch (error) {
            if (error.code === 'P2002') {
                throw new common_1.NotFoundException(`Room with name ${updateRoomDto.name} already exists`);
            }
            if (error.code === 'P2025') {
                throw new common_1.NotFoundException(`Room with id ${id} not found`);
            }
            throw error;
        }
    }
    async remove(id) {
        try {
            return await this.roomService.remove(id);
        }
        catch (error) {
            if ((error.code = 'P2025')) {
                throw new common_1.NotFoundException(`Room with id ${id} not found`);
            }
        }
    }
};
exports.RoomController = RoomController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_room_dto_1.UpdateRoomDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "remove", null);
exports.RoomController = RoomController = __decorate([
    (0, common_1.Controller)('room'),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomController);
//# sourceMappingURL=room.controller.js.map