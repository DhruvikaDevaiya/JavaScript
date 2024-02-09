const employees = 
[
    {
        "Emp_code": "SCIKEY01",
        "Name": "Hardik",
        "Designation": "PM",
        "Business_unit": "Scikey",
        "Branch": "Surat",
        "DOB": "28-09-1997",
        "Department": "PMS",
        "DOJ": "22-02-2002",
        "Email": "hardik@gmail.com",
        "Mob_no": "9977886601",
        "Gender": "MALE",
        "Experience": 3,
        "salary": 50000,
        "hobbies": [
            "cricket",
            "volleyball"
        ]
    },
    {
        "Emp_code": "SCIKEY02",
        "Name": "Vidhi",
        "Designation": "AD",
        "Business_unit": "Scikey",
        "Branch": "Surat",
        "DOB": "05-05-2000",
        "Department": "AMS",
        "DOJ": "04-09-2002",
        "Email": "vidhi@gmail.com",
        "Mob_no": "8237767340",
        "Gender": "FEMALE",
        "Experience": 2,
        "salary": 30000,
        "hobbies": [
            "hockey",
            "volleyball"
        ]
    },
    {
        "Emp_code": "SCIKEY04",
        "Name": "Pratik",
        "Designation": "DEV",
        "Business_unit": "Scikey",
        "Branch": "Mumbai",
        "DOB": "30-10-1987",
        "Department": "GMS",
        "DOJ": "10-02-2006",
        "Email": "pratik.khan@gmail.com",
        "Mob_no": "999978801",
        "Gender": "MALE",
        "Experience": 10,
        "salary": 80000,
        "hobbies": [
            "cricket",
            "Music"
        ]
    },
    {
        "Emp_code": "SCIKEY05",
        "Name": "Komal",
        "Designation": "SDEV",
        "Business_unit": "Scikey",
        "Branch": "Surat",
        "DOB": "28-05-1990",
        "Department": "AMS",
        "DOJ": "15-03-2001",
        "Email": "komal@gmail.com",
        "Mob_no": "997788000",
        "Gender": "FEMALE",
        "Experience": 1,
        "salary": 20000,
        "hobbies": [
            "volleyball"
        ]
    },
    {
        "Emp_code": "SCIKEY06",
        "Name": "Raj",
        "Designation": "PM",
        "Business_unit": "Scikey",
        "Branch": "Mumbai",
        "DOB": "28-09-1977",
        "Department": "PMS",
        "DOJ": "10-02-2000",
        "Email": "raj@gmail.com",
        "Mob_no": "9977885555",
        "Gender": "MALE",
        "Experience": 3,
        "salary": 38000,
        "hobbies": [
            "cricket",
            "volleyball"
        ]
    },
    {
        "Emp_code": "SCIKEY01",
        "Name": "Tisha",
        "Designation": "PM",
        "Business_unit": "Scikey",
        "Branch": "Surat",
        "DOB": "22-03-1997",
        "Department": "PMS",
        "DOJ": "22-02-2002",
        "Email": "tisha@gmail.com",
        "Mob_no": "2222286601",
        "Gender": "FEMALE",
        "Experience": 3,
        "salary": 50000,
        "hobbies": [
            "cricket"
        ]
    }
]

// // 1. Get all the employee details whose salary is between 30K to 40K
// const salary_details = employees.filter(employee => employee.salary >= 30000 && employee.salary <= 40000)
//                                 .map(employee => ({ [employee.Emp_code]: { salary: employee.salary } }));

// console.log("Salary details:", salary_details);

// // 2. Get all the employee details department-wise
// const department_details = employees.reduce((acc, employee) => {
//     if (!acc[employee.Department]) {
//         acc[employee.Department] = [];
//     }
//     acc[employee.Department].push({ Emp_code: employee.Emp_code });
//     return acc;
// }, {});

// console.log("Department details:", department_details);

// // 3. Get all the employee details with 2 years or more experience
// const experience_details = employees.filter(employee => employee.Experience >= 2)
//                                     .map(employee => ({ [employee.Emp_code]: { Experience: employee.Experience } }));

// console.log("Experience details:", experience_details);

// // 4. Get all the employee details whose hobbies include "cricket"
// const hobbies_details = employees.filter(employee => employee.hobbies.includes("cricket"))
//                                     .map(employee => employee.Emp_code);

// console.log("Hobbies details:", hobbies_details);



// 1. Get all the employee details whose salary is between 30K to 40K
const salary_details = [];
for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    if (employee.salary >= 30000 && employee.salary <= 40000) {
        const obj = {};
        obj[employee.Emp_code] = { salary: employee.salary };
        salary_details.push(obj);
    }
}
console.log("Salary details:", salary_details);



// 2. Get all the employee details department-wise
const department_details = {};
for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    if (!department_details[employee.Department]) {
        department_details[employee.Department] = [];
    }
    department_details[employee.Department].push({ Emp_code: employee.Emp_code });
}
console.log("Department details:", department_details);

// 3. Get all the employee details with 2 years or more experience
const experience_details = [];
for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    if (employee.Experience >= 2) {
        const obj = {};
        obj[employee.Emp_code] = { Experience: employee.Experience };
        experience_details.push(obj);
    }
}
console.log("Experience details:", experience_details);

// 4. Get all the employee details whose hobbies include "cricket"
const hobbies_details = [];
for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    if (employee.hobbies.includes("cricket")) {
        hobbies_details.push(employee.Emp_code);
    }
}
console.log("Hobbies details:", hobbies_details);