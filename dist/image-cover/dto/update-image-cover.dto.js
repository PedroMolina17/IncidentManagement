"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImageCoverDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_image_cover_dto_1 = require("./create-image-cover.dto");
class UpdateImageCoverDto extends (0, mapped_types_1.PartialType)(create_image_cover_dto_1.CreateImageCoverDto) {
}
exports.UpdateImageCoverDto = UpdateImageCoverDto;
//# sourceMappingURL=update-image-cover.dto.js.map