$(document).ready(inReady);
let employees = [];
function inReady() {
  //   console.log("in ready");
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
  displayEmployees();

  $("#firstName").val("");
  $("#lastName").val("");
  $("#idNumber").val("");
  $("#title").val("");
  $("#annualSalary").val("");
}

function displayEmployees() {
  console.log("attempting to display");

  let el = $("#employeeObject");
  el.empty();
  let monthlyBudget = 0;

  for (let index = 0; index < employees.length; index++) {
    el.append(
      `<tr><td>${employees[index].firstName}</td>
      <td>${employees[index].lastName}</td>
      <td>${employees[index].idNumber}</td>
      <td>${employees[index].title}</td>
      <td>${employees[index].annualSalary}</td>
      <td><button class="delete">Delete</button></td></tr>`
    );

    monthlyBudget += parseInt(employees[index].annualSalary);
  }
  monthlyBudget /= 12;
  if (monthlyBudget > 20000) {
    $("#monthlyBudget").css("background-color", "red");
    $("#monthlyBudget").html(monthlyBudget);
  } else {
    $("#monthlyBudget").html(monthlyBudget);
    //   console.log(monthlyBudget);
  }
  $(".delete").on("click", deleteRow);
}

function deleteRow() {
  //   console.log($(this).parent().parent());

  $(this).parent().parent().remove();
}

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
