
const express = require('express');
const controller = require('../controllers/employees')
const router = express.Router();

router.get('/', controller.getEmployees);

router.get('/:first_name', controller.getEmployeesByFirstName);

router.get('/:id', controller.getEmployeesById);


 module.exports = router