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
exports.OrganisationRegistrationController = void 0;
const common_1 = require("@nestjs/common");
const organisation_registration_service_1 = require("./organisation-registration.service");
const organisation_registration_dto_1 = require("./organisation-registration.dto");
let OrganisationRegistrationController = class OrganisationRegistrationController {
    constructor(orgReg) {
        this.orgReg = orgReg;
    }
    findAll(query) {
        return this.orgReg.findAll(query);
    }
    async createNewOrg(newOrg) {
        const createdOrg = await this.orgReg.createNewOrg(newOrg);
        return createdOrg;
    }
    async findOrg(id) {
        return this.orgReg.findOrg(id);
    }
    async updateOrg(newOrgDto) {
        const newOrg = Object.assign({}, newOrgDto);
        return this.orgReg.updateOrg(newOrg);
    }
    async deleteOrg(id) {
        return this.orgReg.deleteOrg(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrganisationRegistrationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [organisation_registration_dto_1.CreateOrgRegDto]),
    __metadata("design:returntype", Promise)
], OrganisationRegistrationController.prototype, "createNewOrg", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrganisationRegistrationController.prototype, "findOrg", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [organisation_registration_dto_1.CreateOrgRegDto]),
    __metadata("design:returntype", Promise)
], OrganisationRegistrationController.prototype, "updateOrg", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrganisationRegistrationController.prototype, "deleteOrg", null);
OrganisationRegistrationController = __decorate([
    (0, common_1.Controller)('organisation-registration'),
    __metadata("design:paramtypes", [organisation_registration_service_1.OrganisationRegistrationService])
], OrganisationRegistrationController);
exports.OrganisationRegistrationController = OrganisationRegistrationController;
//# sourceMappingURL=organisation-registration.controller.js.map