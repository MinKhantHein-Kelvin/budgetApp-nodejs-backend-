const express = require('express');
const router = express.Router();
const income = require("../controllers/incomeController");


router.get("/", income.getallIncome);
router.post("/", income.createIncome);
router.delete("/:id", income.deleteIncome);

module.exports = router;