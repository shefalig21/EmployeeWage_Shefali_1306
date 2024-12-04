//Use Case-1:

const randomCheck1=Math.random();
let employeeStatus1;

if (randomCheck1>0.5) {
    employeeStatus1="Present";
} else{
    employeeStatus1="Absent";
}

console.log(`Status: ${employeeStatus1}`);


//(b)

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



