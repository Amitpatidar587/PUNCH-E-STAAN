const express = require("express");
const router = express.Router();
const Expenditure=require('../model/expenditure');
const { validateExpenditure } = require("../middleware");
const WrapAsync = require("../utils/WrapAsync");
const { showExpenditure, addExpenditure, updateExpenditure, deleteExpenditure } = require("../controllers/expenditure");




router.get('/',WrapAsync(showExpenditure))


  router.post('/',validateExpenditure,WrapAsync(addExpenditure))
  router.put('/:id',validateExpenditure,WrapAsync(updateExpenditure))
  router.delete('/:id',WrapAsync(deleteExpenditure))
  
  

module.exports=router;