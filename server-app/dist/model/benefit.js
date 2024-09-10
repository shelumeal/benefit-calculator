"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.benefitModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const benefitSchema = new mongoose_1.default.Schema({
    ageRange: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    additionalClause: {
        type: String,
        required: true,
    },
    incomeLimit: {
        type: String,
        required: true,
    },
    output: {
        type: String,
        required: true,
    },
});
exports.benefitModel = mongoose_1.default.model("Benefit", benefitSchema);
