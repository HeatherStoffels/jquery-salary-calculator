$(document).ready(inReady);
let employees = [];
function inReady() {
  console.log("in ready");
  $("#submitEmployee").on("click", addEmployee);
}
function addEmployee() {
  console.log("in button click");
  let employeeToAdd = {
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
    idNumber: $("#idNumber").val(),
    title: $("#title").val(),
    annualSalary: $("#annualSalary").val(),
  };
  employees.push(employeeToAdd);
}
// create 5 input fields
//employee.firstName
//employee.lastName
//employee.idNumber
//employee.jobTitle
//employee.annualSalary

//create button to take in all 5 inputs

//make sure none of the inputs are blank
//if unput(s) are black make .alert
// create an array of employee objects that pushes
//submitted results

//display results of all 5 fields in a table

//make a delete button that removes and entire employee
//object from the table
// add salaries to report monthly cost
// divide annual salary by 12
//output cost in totalMonthly
//if monthly salary is over 20,000, add red background to
