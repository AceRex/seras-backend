"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationRegistrationModule = void 0;
const common_1 = require("@nestjs/common");
const organisation_registration_service_1 = require("./organisation-registration.service");
const organisation_registration_controller_1 = require("./organisation-registration.controller");
const mongoose_1 = require("@nestjs/mongoose");
const organisation_registration_schema_1 = require("./organisation-registration.schema");
let OrganisationRegistrationModule = class OrganisationRegistrationModule {
};
OrganisationRegistrationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'OrgReg', schema: organisation_registration_schema_1.OrgRegSchema }]),
        ],
        providers: [organisation_registration_service_1.OrganisationRegistrationService],
        controllers: [organisation_registration_controller_1.OrganisationRegistrationController],
    })
], OrganisationRegistrationModule);
exports.OrganisationRegistrationModule = OrganisationRegistrationModule;
//# sourceMappingURL=organisation-registration.module.js.map