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
exports.OrganisationRegistrationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const organisation_registration_schema_1 = require("./organisation-registration.schema");
const mongoose = require("mongoose");
let OrganisationRegistrationService = class OrganisationRegistrationService {
    constructor(orgModel) {
        this.orgModel = orgModel;
    }
    async findAll(query) {
        const keyword = query.keyword
            ? {
                NameOfBusinessOrganization: {
                    $regex: query.keyword,
                    $options: 'i',
                },
            }
            : {};
        const orgRegs = await this.orgModel.find(Object.assign({}, keyword));
        return orgRegs;
    }
    async createNewOrg(newOrg) {
        const res = await this.orgModel.create(newOrg);
        return res;
    }
    async findOrg(id) {
        const res = await this.orgModel.findById(id);
        return res;
    }
    async updateOrg(newOrg) {
        const res = await this.orgModel.findOneAndUpdate({ NameOfBusinessOrganization: newOrg.NameOfBusinessOrganization }, { $push: { AwardEntry: newOrg } }, { new: true });
        return res;
    }
    async deleteOrg(id) {
        const res = await this.orgModel.findByIdAndDelete(id);
        return res;
    }
};
OrganisationRegistrationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(organisation_registration_schema_1.OrgReg.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], OrganisationRegistrationService);
exports.OrganisationRegistrationService = OrganisationRegistrationService;
//# sourceMappingURL=organisation-registration.service.js.map