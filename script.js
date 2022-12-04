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
    let newID = $('#iDInput').val();
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
    employees.push(existingEmployees);

    //updatte DOM
    renderEmployees();

    //empyt inputs after hitting submit
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#iDInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}


//function to update the DOM
function renderEmployees() {
    //first empty array
    //('#existingEmployees').empty();
    for (let i = 0; i<employees.length; i++) {
        if (i === 0) {
            $('#existingEmployees').append(`
            <tr>
              <td>${employees[i].firstName}</td>
              <td>${employees[i].lastName}</td>
              <td>${employees[i].iD}</td>
              <td>${employees[i].title}</td>
              <td>${employees[i].annualSalary}</td>
              <td>
                  <button class="Delete">Delete</button>
              </td>
           </tr>
            `)
        }
    }   
}

//function to remove an employee from the table
function deleteEmployee() {
    //test to see if function is working
    console.log('you removed an employee')

    let buttonThatGotClicked = $(this);
    let employeeToDelete = buttonThatGotClicked.parent();
    employeeToDelete.remove();

}