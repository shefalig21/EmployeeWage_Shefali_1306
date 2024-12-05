//Use Case-1:

const randomCheck1=Math.random();
let employeeStatus1;

if (randomCheck1>0.5) {
    employeeStatus1="Present";
} else{
    employeeStatus1="Absent";
}

console.log(`Status: ${employeeStatus1}`);


//Use Case-2

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


//Use Case-3:

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
    return { dailyWages, workedHours };  // Return
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

//Use case:4






//Use Case: 5

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
  
  //Use Case3 refactor the code and find the work hours
  // Function to check attendance and calculate wages if present
  let result1 = calculateDailyWages();
  console.log("Total worked hours: " + result.workedHours);
  console.log("Final wages: $" + result.dailyWages);
  
  //Use case :using for loop
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
    console.log(
      "The Employee worked hours:",
      totalHours,
      "and montly salary:",
      Salary
    );
  }
  monthlySalary()


//Use Case:6
//(find 12 month salary and total hours and total days prsent )

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
