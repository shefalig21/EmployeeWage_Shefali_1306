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

//Use Case: 4


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


