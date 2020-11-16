"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Example = /** @class */ (function () {
    function Example() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], Example.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('varchar')
    ], Example.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column('varchar')
    ], Example.prototype, "email", void 0);
    __decorate([
        typeorm_1.CreateDateColumn()
    ], Example.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], Example.prototype, "updated_at", void 0);
    Example = __decorate([
        typeorm_1.Entity('examples')
    ], Example);
    return Example;
}());
exports.default = Example;
