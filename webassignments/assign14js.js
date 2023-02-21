/**
 * Problem 1.
 **/
console.log("*****PROBLEM 1*********")

let employees = [
  {
      "first_name": "Sam",
      "dept": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raise_eligible": true
    },
    {
      "first_name": "Mary",
      "dept": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raise_eligible": true
    },
    {
      "first_name": "Bill",
      "dept": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raise_eligible": false
    }
  ]

console.log(employees);

/**
 * Problem 2.
 **/
console.log("*****PROBLEM 2*********")

let company = {
  "companyName": "Tech Stars",
  "website": "techstars.site",
  "employees": [
    {
      "first_name": "Sam",
      "dept": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raise_eligible": true
    },
    {
      "first_name": "Mary",
      "dept": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raise_eligible": true
    },
    {
      "first_name": "Bill",
      "dept": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raise_eligible": false
    }
  ]
}

console.log(company)

/**
 * Problem 3.
 **/

console.log("*****PROBLEM 3*********")

const newHire = {
  "first_name": "Anna",
  "dept": "Tech",
  "designation": "Executive",
  "salary": 25600,
  "raise_eligible": false
}

function newEmployee(obj){
  employees.push(obj);
}

newEmployee(newHire)

console.log(employees)

/**
 * Problem 4.
 **/

 console.log("*****PROBLEM 4*********")

let totalSalary = employees[0].salary + employees[1].salary + employees[2].salary + employees[3].salary

console.log(totalSalary)


/**
 * Problem 5.
 *
 * It's raise time. If an employee is raise eligible, increase their salary by 10%.
 * Given the JSON of the company and its employees, write a function to update the salary
 * for each employee who is raised eligible, then set their eligibility to false.
 *
 * Print names of employees who got a raise to console, list original and new salary.
 **/
console.log("*****PROBLEM 5*********")

function giveRaise0() {
  if (raise_eligible = true) {
    newSalary0 = employees[0].salary + (employees[0].salary*0.1)
  } else {
    newSalary0 = employees[0].salary
  }
}

function giveRaise1() {
  if (raise_eligible = true) {
    newSalary1 = employees[1].salary + (employees[1].salary*0.1)
  } else {
    newSalary1 = employees[1].salary
  }
}

function giveRaise2() {
  if (employees.raise_eligible != true) {
    newSalary2 = employees[2].salary
  } else {
    newSalary2 = employees[2].salary + (employees[2].salary*0.1)
  }
}

function giveRaise3() {
  if (newHire.raise_eligible === true) {
    newSalary3 = employees[3].salary + (employees[3].salary*0.1)
  }
  if (newHire.raise_eligible === false) {
    newSalary3 = employees[3].salary
  }
}

giveRaise0()
giveRaise1()
giveRaise2()
giveRaise3()

console.log(newSalary0)
console.log(newSalary1)
console.log(newSalary2)
console.log(newSalary3)
/**
 * Problem 6.
 *
 * Some employees have decided to work from home. The following array indicates who is working from home.
 * Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
 *
 * Working from home: ['Anna', 'Sam']
 *
 * Print updated JSON to console.
 **/
console.log("*****PROBLEM 6*********")

employees[0].wfh = true
employees[1].wfh = false
employees[2].wfh = false
employees[3].wfh = true

console.log(employees)
