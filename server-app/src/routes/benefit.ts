import express from "express";
import {createRule,getAllRules,getBenefits} from "../controllers/benefit"

const router=express.Router();

router.post("/benefit/createRule",createRule);
router.get("/benefit/getAllRules",getAllRules);
router.post("/benefit/getBenefits",getBenefits);

export default router;