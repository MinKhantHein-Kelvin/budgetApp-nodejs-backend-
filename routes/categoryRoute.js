const express = require('express');
const router = express.Router();
const category = require("../controllers/categoryController");


router.get("/", category.getallCategory);
router.post("/", category.createCategory);
router.delete("/:id", category.deleteCategory);

module.exports = router;