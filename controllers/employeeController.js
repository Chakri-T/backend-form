const Employee = require("../modals/Employee");

const createEmployee = async (req, res) => {
  try {
    const { firstName, lastName, email, contact } = req.body;

    const employee = new Employee({
      firstName,
      lastName,
      email,
      contact,
    });
    await employee.save();

    res.status(201).json(employee);
  } catch (err) {
    console.log("error", err);
    res.status(500).json({ message: "Server Error" });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.status(201).json(employees);
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = { createEmployee, getEmployees };
