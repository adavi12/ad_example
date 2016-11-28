console.log('js sourced');

var employee = [];

var newEmployee = function (){
  /// get user input
  /// assemble new object
  var addEmployee = {
    firstName: document.getElementById("fname").value,
    lastName: document.getElementById('lname').value,
    idNumber: document.getElementById('idnum').value,
    jobTitle: document.getElementById('title').value,
    annualSalary: document.getElementById('salary').value
  }; // end obj
  /// push new employee into array
  employee.push( addEmployee );
  console.log( 'employee', employee );

  document.getElementById( 'outputDiv' ).innerHTML = '';
  /// loop through employees
  var totalSalaries = 0;
  for(var i= 0;i < employee.length; i++){
    console.log( 'employee salary:', employee[i].annualSalary );
    document.getElementById( 'outputDiv' ).innerHTML += '<p>' + employee[i].firstName + '</p>'; 
    /// add to total salaries
    totalSalaries += Number( employee[i].annualSalary );
  }; // end for
  /// empty outputdiv's HTML
  document.getElementById( 'outputDiv' ).innerHTML += "<p>Total Salaries: $" + totalSalaries + "</p>";
  console.log( 'totalSalaries:', totalSalaries );
  /// calculate monthly salary payout
  var monthlySalaries = totalSalaries / 12;
  console.log( 'monthlySalaries', monthlySalaries );
  document.getElementById( 'outputDiv' ).innerHTML += "<p>Monthly Salaries: $" + monthlySalaries + "</p>";
} // end func
