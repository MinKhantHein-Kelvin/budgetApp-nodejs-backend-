const express = require('express');
const router = express.Router();
const expense = require("../controllers/expenseController");


router.get("/", expense.getallExpense);
router.post("/", expense.createExpense);
router.delete("/:id", expense.deleteExpense);

module.exports = router;