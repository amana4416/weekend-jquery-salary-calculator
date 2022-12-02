$(document).ready(onReady);

let employees = [];

function onReady() {
    //test to see if function is working
    console.log('jquery is working!')
    $('#addNewEmployeesButton').on('click', addNewEmployee)

}

//function to add new employees to table
function addNewEmployee() {
    //test to see if function is working
    console.log('added a new employee');

    //get input values
    let newFirstName = $('#firstNameInput').val();
    let newLastName = $('#lastNameInput').val();
    let newID = $('#idInput').val();
    let newTitle = $('#titleInput').val();
    let newAnnualSalary = $('#annualSalaryInput').val();

    //make a new object
    let newEmployee = {
        firstName: newFirstName,
        lastName: newLastName,
        iD: newID,
        title: newTitle,
        annualSalary: newAnnualSalary
    }

    //add to array
    employees.push(newEmployee)

    //updatte DOM
    renderEmployees();

    //empyt inputs after hitting submit
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}