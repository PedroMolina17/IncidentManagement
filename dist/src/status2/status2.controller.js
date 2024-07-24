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
exports.Status2Controller = void 0;
const common_1 = require("@nestjs/common");
const status2_service_1 = require("./status2.service");
const update_status2_dto_1 = require("./dto/update-status2.dto");
let Status2Controller = class Status2Controller {
    constructor(status2Service) {
        this.status2Service = status2Service;
    }
    async create(createStatus2Dto) {
        return await this.status2Service.create(createStatus2Dto);
    }
    findAll() {
        return this.status2Service.findAll();
    }
    findOne(id) {
        return this.status2Service.findOne(+id);
    }
    update(id, updateStatus2Dto) {
        return this.status2Service.update(+id, updateStatus2Dto);
    }
    remove(id) {
        return this.status2Service.remove(+id);
    }
};
exports.Status2Controller = Status2Controller;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Status2Controller.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Status2Controller.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Status2Controller.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_status2_dto_1.UpdateStatus2Dto]),
    __metadata("design:returntype", void 0)
], Status2Controller.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Status2Controller.prototype, "remove", null);
exports.Status2Controller = Status2Controller = __decorate([
    (0, common_1.Controller)('status2'),
    __metadata("design:paramtypes", [status2_service_1.Status2Service])
], Status2Controller);
//# sourceMappingURL=status2.controller.js.map