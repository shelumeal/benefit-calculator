"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const benefit_1 = require("../controllers/benefit");
const router = express_1.default.Router();
router.post("/benefit/createRule", benefit_1.createRule);
router.get("/benefit/getAllRules", benefit_1.getAllRules);
router.post("/benefit/getBenefits", benefit_1.getBenefits);
exports.default = router;
