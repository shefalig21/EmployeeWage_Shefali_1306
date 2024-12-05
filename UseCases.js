
//Use Case-1:to check if employee is present or absent
/*

const randomCheck1=Math.random();
let employeeStatus1;

if (randomCheck1>0.5) {
    employeeStatus1="Present";
} else{
    employeeStatus1="Absent";
}

console.log(`Status: ${employeeStatus1}`);


//Use Case-2: if employee is full time,part time and thier daily wage.

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


//Use Case-3: Refactor and worked Hours.

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

// Use case: refactor the code and find the work hours
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


//Use Case-4: Calculating Wages for a Month assuming 20 Working Days in a Month

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
    let salary = 0;
    let totalDays = 0;
  
    for (let i = 0; i < 20; i++) {
      let attendance = checkAttendance();
      if (attendance) {
        let result = calculateDailyWages();
        totalDays++;
        totalHours += result.workedHours;
        salary += result.dailyWages;
      }
    }
    console.log(`The Employee worked for ${totalHours} hours over ${totalDays} days, and the monthly salary is $${salary}.`);
  }
  monthlySalary()


//Use case-5: Wages till a condition of total working hours of 160 or max days of 20 is reached for a month


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
  

  let result2 = calculateDailyWages();
  console.log("Total worked hours: " + result2.workedHours);
  console.log("Final wages: $" + result2.dailyWages);
  //for month
  function monthlySalary() {
    let totalHours = 0;
    let Salary = 0;
    let totalDays = 0;
  
    while(totalDays<20 && totalHours<160) {
      let attendance = checkAttendance();
      if (attendance) {
        let result3= calculateDailyWages();
        totalDays++;
        totalHours += result3.workedHours;
        Salary += result3.dailyWages;
      }
    }
    console.log(`The Employee worked for ${totalHours} hours over ${totalDays} days, and the monthly salary is $${salary}.`);
  }
  monthlySalary()

  */
 
  //Use Case-6: Calculate 12 month wise salary

  const partTime = 4;
  const fullTime = 8;
  const perHourWage = 20;
  
  function generateDailyData() {
      const randomCheck = Math.random();
      let employeeStatus = randomCheck > 0.5 ? "Present" : "Absent";
      let workType = Math.floor(Math.random() * 3); // Random work type
  
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
              default:   // no work, if workType is 0 (you can modify this behavior)
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
  
      for (let i = 0; i < 20; i++) {  // Assuming 20 workdays in a month
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
          monthlySalary();   month
      }
  }
  
  
  annualSalary();
  
  