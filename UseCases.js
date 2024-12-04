//Use Case-1:

const randomCheck=Math.random();
let employeeStatus;

if (randomCheck>0.5) {
    employeeStatus="Present";
} else{
    employeeStatus="Absent";
}

console.log(`Status: ${employeeStatus}`);
