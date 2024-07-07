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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const password = await bcrypt.hashSync(createUserDto.password, 10);
        const userData = { ...createUserDto, password };
        return await this.prisma.users.create({ data: userData });
    }
    async findAll(filters) {
        const where = {};
        if (filters.username) {
            where.username = { contains: filters.username };
        }
        if (filters.email) {
            where.email = { contains: filters.email };
        }
        return await this.prisma.users.findMany({ where });
    }
    async findOne(id) {
        return await this.prisma.users.findUnique({ where: { user_id: id } });
    }
    async update(id, updateUserDto) {
        return await this.prisma.users.update({
            where: { user_id: id },
            data: updateUserDto,
        });
    }
    async remove(id) {
        return await this.prisma.users.delete({ where: { user_id: id } });
    }
    async findOneByEmail(email) {
        return this.prisma.users.findUnique({
            where: { email },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map