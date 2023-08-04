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
exports.OrgRegSchema = exports.OrgReg = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let OrgReg = class OrgReg {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "Country", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "NameOfBusinessOrganization", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "EmailOfBusinessOrganization", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "AddressOfBusinessOrganization", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "NameOfCEOMD", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "MultinationalSituated", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "OrganisationVision", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "CSRSustainabiltyPolicy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], OrgReg.prototype, "ReportingStandardsAdopted", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], OrgReg.prototype, "AreasSustainabilityPolicyAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "GoalsAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], OrgReg.prototype, "DecisionsAreTakenBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], OrgReg.prototype, "WhatDeterminesTheAmountOfFunds", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], OrgReg.prototype, "AwardEntry", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "City", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "State", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "OtherCountriesPresent", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "PaymentStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OrgReg.prototype, "EntryKey", void 0);
OrgReg = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], OrgReg);
exports.OrgReg = OrgReg;
exports.OrgRegSchema = mongoose_1.SchemaFactory.createForClass(OrgReg);
//# sourceMappingURL=organisation-registration.schema.js.map