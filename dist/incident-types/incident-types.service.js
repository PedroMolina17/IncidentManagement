"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTypesService = void 0;
const common_1 = require("@nestjs/common");
let IncidentTypesService = class IncidentTypesService {
    create(createIncidentTypeDto) {
        return 'This action adds a new incidentType';
    }
    findAll() {
        return `This action returns all incidentTypes`;
    }
    findOne(id) {
        return `This action returns a #${id} incidentType`;
    }
    update(id, updateIncidentTypeDto) {
        return `This action updates a #${id} incidentType`;
    }
    remove(id) {
        return `This action removes a #${id} incidentType`;
    }
};
exports.IncidentTypesService = IncidentTypesService;
exports.IncidentTypesService = IncidentTypesService = __decorate([
    (0, common_1.Injectable)()
], IncidentTypesService);
//# sourceMappingURL=incident-types.service.js.map