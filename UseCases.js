
/*

//Use Case-1: to Check Employee is present or Absent

const randomCheck1=Math.random();
let employeeStatus1;

if (randomCheck1>0.5) {
    employeeStatus1="Present";
} else{
    employeeStatus1="Absent";
}

console.log(`Status: ${employeeStatus1}`);


//Use Case-2: to Calculate Daily Employee Wage based on part time or full time work

const randomCheck=Math.random();
const partTime=4;
const fullTime=8;
const perHourWage=20;

let employeeStatus=randomCheck>0.5?"Present":"Absent";

let dailyWage=0;

if(employeeStatus==="Present")
{
    console.log("Employee is present");

let workType=Math.floor(Math.random()*3);

switch(workType)
{
    case 0:
        console.log("No Work done");
        dailyWage=0;
        break;
        
    case 1:
        console.log("Part Time Employee");
        dailyWage=perHourWage*partTime;
        break;
        
    case 2:
        console.log("Full Time employee");
        dailyWage=perHourWage*fullTime;
        break;
        
  }

} else{
    console.log("Employee is absent");
}

console.log("Daily Wage: $"+dailyWage);


//Use Case-3: Refactor the Code to write a function to get work hours

// Use case for Attendance Check
function checkAttendance() {
    let employee = Math.random();
    if (employee < 0.5) {
        console.log("Absent");
        return "Absent";    
    } else {
        console.log("Present");
        return "Present";    
    }
}

// Use case:Calculate the wages for part-time and full-time
function calculateDailyWages() {
    const partTimeHours = 4;
    const fullTimeHours = 8;
    const wagesPerHour = 20;
    
    let employeeType = Math.floor(Math.random() * 3);
    let workedHours = 0;
    
    switch(employeeType) {
        case 0:
            workedHours = 0;
            console.log("No Time worked");
            break;
        case 1:
            workedHours = partTimeHours;
            console.log("Part Time Worked");
            break;
        case 2:
            workedHours = fullTimeHours;
            console.log("Full Time Worked");
            break;
        default:
            workedHours = 0;
            console.log("Invalid Output");
    }
    
    let dailyWages = workedHours * wagesPerHour;
    return { dailyWages, workedHours }; 
}

//Use Case: refactor the code and find the work hours 
function checkAttendanceAndCalculateWages() {//function to check attendance and calculate wage
    let attendanceStatus = checkAttendance();
    let dailyWages = 0;
    let workedHours = 0;

    if (attendanceStatus === "Present") {
        let result = calculateDailyWages();
        dailyWages = result.dailyWages;
        workedHours = result.workedHours;
    } else {
        console.log("No wages as the employee is absent.");
    }
    return { workedHours, dailyWages}; // Return 
}

let result = checkAttendanceAndCalculateWages();
console.log("Total worked hours: " + result.workedHours);
console.log("Final wages: $" + result.dailyWages);


//Use case-4: Calculating Wages for a Month assuming 20 Working Days in a Month

// Use case for Attendance Check
function checkAttendance() {
    let employee = Math.random();
    if (employee < 0.5) {
      return "Absent";
    } else {
      return "Present";
    }
  }
  
  // Use case: Calculate the wages for part-time and full-time
  function calculateDailyWages() {
    const partTimeHours = 4;
    const fullTimeHours = 8;
    const wagesPerHour = 20;
    let employeeType = Math.floor(Math.random() * 3);
    let workedHours = 0;
  
    switch (employeeType) {
      case 0:
        workedHours = 0;
      //   console.log("No Time worked");
        break;
      case 1:
        workedHours = partTimeHours;
      //   console.log("Part Time Worked");
        break;
      case 2:
        workedHours = fullTimeHours;
      //   console.log("Full Time Worked");
        break;
      default:
        workedHours = 0;
      //   console.log("Invalid Output");
    }
  
    let dailyWages = workedHours * wagesPerHour;
    return { dailyWages, workedHours }; 
  }

  // Function to check attendance and calculate wages if present
  let result1 = calculateDailyWages();
  console.log("Total worked hours: " + result1.workedHours);
  console.log("Final wages: $" + result1.dailyWages);
  
  //using for loop
  function monthlySalary() {
    let totalHours = 0;
    let Salary = 0;
    let totalDays = 0;
  
    for (let i = 0; i < 20; i++) {
      let attendance = checkAttendance();
      if (attendance) {
        let result = calculateDailyWages();
        totalDays++;
        totalHours += result.workedHours;
        Salary += result.dailyWages;
      }
    }
    console.log("The Employee worked hours:",totalHours,
      "and montly salary:",Salary);
  }
  monthlySalary()



//Use Case-5: Calculate Wages till a condition of total working hours of 160 or max days of 20 is 
for a month

// Use case for Attendance Check
function checkAttendance() {
    let employee = Math.random();
    if (employee < 0.5) {

      return "Absent";
    } else {
      return "Present";
    }
  }
  
  // Use case: Calculate the wages for part-time and full-time
  function calculateDailyWages() {
    const partTimeHours = 4;
    const fullTimeHours = 8;
    const wagesPerHour = 20;

    let employeeType = Math.floor(Math.random() * 3);
    let workedHours = 0;
  
    switch (employeeType) {
      case 0:
        workedHours = 0;
      //   console.log("No Time worked");
        break;
      case 1:
        workedHours = partTimeHours;
      //   console.log("Part Time Worked");
        break;
      case 2:
        workedHours = fullTimeHours;
      //   console.log("Full Time Worked");
        break;
      default:
        workedHours = 0;
      //   console.log("Invalid Output");
    }
  
    let dailyWages = workedHours * wagesPerHour;
    return { dailyWages, workedHours }; 
  }

  let result2= calculateDailyWages();
  console.log("Total worked hours: " + result2.workedHours);
  console.log("Final wages: $" + result2.dailyWages);
  
  //using for loop
  function monthlySalary() {
    let totalHours = 0;
    let Salary = 0;
    let totalDays = 0;
  
    while(totalDays<20 && totalHours<160){
      let attendance = checkAttendance();
      if (attendance) {
        let result = calculateDailyWages();
        totalDays++;
        totalHours += result.workedHours;
        Salary += result.dailyWages;
      }
    }
    console.log("The Employee worked hours:",totalHours,
      "and montly salary:",Salary);
  }
  monthlySalary()


//Use Case-6: find 12 month salary and total hours and total days present of a user.

const partTime = 4;
const fullTime = 8;
const perHourWage = 20;

function generateDailyData() {
    const randomCheck = Math.random();
    let employeeStatus = randomCheck > 0.5 ? "Present" : "Absent";
    let workType = Math.floor(Math.random() * 3);

    let dailyWage = 0;
    let dailyHours = 0;

    if (employeeStatus === "Present") {
        switch (workType) {
            case 1:    // part-time
                dailyWage = perHourWage * partTime;
                dailyHours = partTime;
                break;
            case 2:    // full-time
                dailyWage = perHourWage * fullTime;
                dailyHours = fullTime;
                break;
            default:
                dailyWage = 0;
                dailyHours = 0;
        }
    } else {
        dailyWage = 0;
        dailyHours = 0;
    }

    return { dailyWage, dailyHours, employeeStatus };
}

function calculateMonthlySalary() {
    const daysInMonth = 20; // fix 20 days working
    let monthlySalary = 0;
    let totalHoursWorked = 0;
    let totalDaysPresent = 0;

    for (let day = 0; day < daysInMonth; day++) {
        const { dailyWage, dailyHours, employeeStatus } = generateDailyData();
        monthlySalary += dailyWage;
        totalHoursWorked += dailyHours;
        if (employeeStatus === "Present") {
            totalDaysPresent++;
        }
    }

    return { monthlySalary, totalHoursWorked, totalDaysPresent };
}

function annualSalary() {
    let employee = [];

    for (let i = 1; i <= 12; i++) {
        const salaryAnnual = calculateMonthlySalary();
        employee.push(salaryAnnual); 
    }
    return employee; 
}

const employeeData = annualSalary();

let totalYearlySalary = 0;
let totalHoursWorkedYearly = 0;
let totalDaysPresentYearly = 0;

employeeData.forEach((monthData) => {
    totalYearlySalary += monthData.monthlySalary;
    totalHoursWorkedYearly += monthData.totalHoursWorked;
    totalDaysPresentYearly += monthData.totalDaysPresent;
});

console.log("\nAnnual Summary:");
console.log(`Total Yearly Salary: $${totalYearlySalary}`);
console.log(`Total Days Present in the Year: ${totalDaysPresentYearly}`);
console.log(`Total Hours Worked in the Year: ${totalHoursWorkedYearly}`);


//Use case-7: Taking name as input for various employees and priniting salary for every user month wise.

const partTime = 4;
const fullTime = 8;
const perHourWage = 20;

function generateDailyData() {
    const randomCheck = Math.random();
    let employeeStatus = randomCheck > 0.5 ? "Present" : "Absent";
    let workType = Math.floor(Math.random() * 3);

    let dailyWage = 0;
    let dailyHours = 0;

    if (employeeStatus === "Present") {
        switch (workType) {
            case 1:    // part-time
                dailyWage = perHourWage * partTime;
                dailyHours = partTime;
                break;
            case 2:    // full-time
                dailyWage = perHourWage * fullTime;
                dailyHours = fullTime;
                break;
            default:  
                dailyWage = 0;
                dailyHours = 0;
        }
    } else {
        dailyWage = 0;
        dailyHours = 0;
    }

    return { dailyWage, dailyHours, employeeStatus };
}

function checkAttendance() {
    const { employeeStatus } = generateDailyData();
    return employeeStatus;
}

function calculateDailyWages() {
    const { dailyWage, dailyHours } = generateDailyData();
    return { dailyWages: dailyWage, workedHours: dailyHours };
}

function monthlySalary() {
    let totalHours = 0;
    let Salary = 0;
    let totalDays = 0;

    for (let i = 0; i < 20; i++) {  //20 fixed days
        let attendance = checkAttendance();
        if (attendance === "Present") {
            let result = calculateDailyWages();
            totalDays++;
            totalHours += result.workedHours;
            Salary += result.dailyWages;
        }
    }
    console.log("The Employee worked hours:", totalHours, ", monthly salary:", Salary, " and days:", totalDays);
}

function annualSalary() {
    let employee = [];

    for (let i = 1; i <= 12; i++) { 
        console.log(`Month ${i}:`);
        monthlySalary();   
    }
}

function userDetails() {
    const numEmp = prompt("Enter the number of employees: ");
    let employees = [];
    
    for (let i = 0; i < numEmp; i++) {
        let name = prompt("Enter the name: ");
        employees.push({ name });  
    }

    // For each employee, print their name and calculate the annual salary
    employees.forEach(employee => {
        console.log(`Employee name: ${employee.name}`);
        annualSalary();  // Call annualSalary() for each employee
    });
}

userDetails();

*/

//Use Case-8: Taking month as input and printing salary for that specific month only.

const partTime = 4;
const fullTime = 8;
const perHourWage = 20;

function generateDailyData() {
    const randomCheck = Math.random();
    let employeeStatus = randomCheck > 0.5 ? "Present" : "Absent";
    let workType = Math.floor(Math.random() * 3);

    let dailyWage = 0;
    let dailyHours = 0;

    if (employeeStatus === "Present") {
        switch (workType) {
            case 1: // part-time
                dailyWage = perHourWage * partTime;
                dailyHours = partTime;
                break;
            case 2: // full-time
                dailyWage = perHourWage * fullTime;
                dailyHours = fullTime;
                break;
            default:
                dailyWage = 0;
                dailyHours = 0;
        }
    } else {
        dailyWage = 0;
        dailyHours = 0;
    }

    return { dailyWage, dailyHours, employeeStatus };
}

function checkAttendance() {
    const { employeeStatus } = generateDailyData();
    return employeeStatus;
}

function calculateDailyWages() {
    const { dailyWage, dailyHours } = generateDailyData();
    return { dailyWages: dailyWage, workedHours: dailyHours };
}

function monthlySalary() {
    let totalHours = 0;
    let Salary = 0;
    let totalDays = 0;

    for (let i = 0; i < 20; i++) { // 20 fixed days
        let attendance = checkAttendance();
        if (attendance === "Present") {
            let result = calculateDailyWages();
            totalDays++;
            totalHours += result.workedHours;
            Salary += result.dailyWages;
        }
    }
    return { totalHours, Salary, totalDays };
}

function specificMonthSalary(month) {
    console.log(`Salary details for Month ${month}:`);
    const { totalHours, Salary, totalDays } = monthlySalary();
    console.log(
        `Worked hours: ${totalHours}, Monthly Salary: $${Salary}, Days Worked: ${totalDays}`
    );
}

function userDetails() {
    const numEmp = prompt("Enter no. of employees: ");
    const specificMonth = prompt("Enter  no. of month");
    let employees = [];

    for (let i = 0; i < numEmp; i++) {
        let name = prompt("Enter name of Employee " + (i + 1) + ": ");
        employees.push({ name });
    }

    employees.map((employee) => {
        console.log(`\nEmployee Name: ${employee.name}`);
        specificMonthSalary(specificMonth);
    });
}

userDetails();