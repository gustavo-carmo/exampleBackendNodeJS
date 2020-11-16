"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Example_1 = __importDefault(require("@modules/examples/typeorm/entities/Example"));
var uuidv4_1 = require("uuidv4");
var FakeExamplesRepository = /** @class */ (function () {
    function FakeExamplesRepository() {
        this.examples = [];
    }
    FakeExamplesRepository.prototype.create = function (_a) {
        var name = _a.name, email = _a.email;
        return __awaiter(this, void 0, void 0, function () {
            var example;
            return __generator(this, function (_b) {
                example = new Example_1.default();
                Object.assign(example, { id: uuidv4_1.uuid(), name: name, email: email });
                this.examples.push(example);
                return [2 /*return*/, example];
            });
        });
    };
    FakeExamplesRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.examples.find(function (example) { return example.id === id; })];
            });
        });
    };
    FakeExamplesRepository.prototype.save = function (example) {
        return __awaiter(this, void 0, void 0, function () {
            var exampleIndex;
            return __generator(this, function (_a) {
                exampleIndex = this.examples.findIndex(function (findExample) { return findExample.id === example.id; });
                this.examples[exampleIndex] = example;
                return [2 /*return*/, example];
            });
        });
    };
    FakeExamplesRepository.prototype.delete = function (example) {
        return __awaiter(this, void 0, void 0, function () {
            var exampleIndex;
            return __generator(this, function (_a) {
                exampleIndex = this.examples.findIndex(function (findExample) { return findExample.id === example.id; });
                this.examples.splice(exampleIndex, 1);
                return [2 /*return*/];
            });
        });
    };
    FakeExamplesRepository.prototype.find = function (_a) {
        var name = _a.name, email = _a.email;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.examples.filter(function (example) {
                        return (name && example.name === name) ||
                            (email && example.email === email) ||
                            (!name && !email && example);
                    })];
            });
        });
    };
    return FakeExamplesRepository;
}());
exports.default = FakeExamplesRepository;
