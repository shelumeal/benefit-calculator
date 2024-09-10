import mongoose from "mongoose";

const benefitSchema= new mongoose.Schema({
    ageRange:{
        type: String,
        required:true,
    }, 
    nationality:{
        type: String,
        required: true,
    }, 
    additionalClause:{
        type: String,
        required: true,
    }, 
    incomeLimit:{
        type: String,
        required: true,
    }, 
    output:{
        type: String,
        required: true,
    }, 
})

export const benefitModel= mongoose.model("Benefit",benefitSchema) 

