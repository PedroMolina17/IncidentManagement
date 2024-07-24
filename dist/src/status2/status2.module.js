"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status2Module = void 0;
const common_1 = require("@nestjs/common");
const status2_service_1 = require("./status2.service");
const status2_controller_1 = require("./status2.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let Status2Module = class Status2Module {
};
exports.Status2Module = Status2Module;
exports.Status2Module = Status2Module = __decorate([
    (0, common_1.Module)({
        controllers: [status2_controller_1.Status2Controller],
        providers: [status2_service_1.Status2Service],
        imports: [prisma_module_1.PrismaModule],
    })
], Status2Module);
//# sourceMappingURL=status2.module.js.map