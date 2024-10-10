const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const Employee = require("../modals/Employee");

router.post("/addEmp", employeeController.createEmployee);
router.get("/getEmp", employeeController.getEmployees);
module.exports = router;
