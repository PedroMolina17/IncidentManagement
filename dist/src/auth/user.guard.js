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
exports.UserGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let UserGuard = class UserGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException('Token not found');
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_SECRET,
            });
            if (payload.role !== 2) {
                throw new common_1.UnauthorizedException('Unauthorized access');
            }
            request.user = payload;
            return true;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
    extractTokenFromHeader(request) {
        const authHeader = request.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            return authHeader.slice(7);
        }
        return undefined;
    }
};
exports.UserGuard = UserGuard;
exports.UserGuard = UserGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], UserGuard);
//# sourceMappingURL=user.guard.js.map