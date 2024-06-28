"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const incident_types_module_1 = require("./incident-types/incident-types.module");
const type_users_module_1 = require("./type-users/type-users.module");
const prisma_module_1 = require("./prisma/prisma.module");
const status_module_1 = require("./status/status.module");
const users_module_1 = require("./users/users.module");
const image_description_module_1 = require("./image-description/image-description.module");
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const image_cover_module_1 = require("./image-cover/image-cover.module");
const incidents_module_1 = require("./incidents/incidents.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
            }),
            incident_types_module_1.IncidentTypesModule,
            type_users_module_1.TypeUsersModule,
            prisma_module_1.PrismaModule,
            status_module_1.StatusModule,
            users_module_1.UsersModule,
            image_description_module_1.ImageDescriptionModule,
            image_cover_module_1.ImageCoverModule,
            incidents_module_1.IncidentsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map