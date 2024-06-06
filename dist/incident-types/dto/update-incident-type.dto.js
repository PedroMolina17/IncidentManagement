"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIncidentTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_incident_type_dto_1 = require("./create-incident-type.dto");
class UpdateIncidentTypeDto extends (0, mapped_types_1.PartialType)(create_incident_type_dto_1.CreateIncidentTypeDto) {
}
exports.UpdateIncidentTypeDto = UpdateIncidentTypeDto;
//# sourceMappingURL=update-incident-type.dto.js.map