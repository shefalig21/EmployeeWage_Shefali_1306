//Use Case-1:

const randomCheck1=Math.random();
let employeeStatus1;

if (randomCheck1>0.5) {
    employeeStatus1="Present";
} else{
    employeeStatus1="Absent";
}

console.log(`Status: ${employeeStatus1}`);


//Use Case-2:

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

function checkAttendanceAndCalculateWages() {
    const partTimeHours = 4;
    const fullTimeHours = 8;
    const wagesPerHour = 20;
    
    let isPresent = Math.random() > 0.5; 
    
    if (!isPresent) {
        console.log("Employee is Absent.");
        return { workedHours: 0, dailyWages: 0 };
    }
    
    console.log("Employee is Present.");
    
    let workType = Math.floor(Math.random() * 3);
    let workedHours = 0;
    
    switch (workType) {
        case 0:
            console.log("No Time worked");
            break;
        case 1:
            workedHours = partTimeHours;
            console.log("Part-Time Worked");
            break;
        case 2:
            workedHours = fullTimeHours;
            console.log("Full-Time Worked");
            break;
    }
    
    let dailyWages = workedHours * wagesPerHour;
    return { workedHours, dailyWages };
}

let result = checkAttendanceAndCalculateWages();
console.log("Total worked hours: " + result.workedHours);
console.log("Final wages: $" + result.dailyWages);


