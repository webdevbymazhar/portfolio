const express = require("express")
const router = express.Router()

const Form = require("../model/formModel")


router.post("/form", async (req,res)=>{
    try {
        const formData = req.body;
        const newForm = new Form(formData);
        const savedForm = await newForm.save();
        res.status(201).json({
            message: "Form submitted successfully",
            form: savedForm
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while submitting the form",
            error: error.message
        });
    }
})

module.exports = router