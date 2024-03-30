#!/usr/bin/env node

import inquirer from "inquirer";

// Welcome message
console.log("Welcome to my Calculator");

// Ask user for input
const answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Kindly enter your first number:"
    },
    {
        name: "num2",
        type: "number",
        message: "Kindly enter your second number:"
    },
    {
        name: "operation",
        type: "list",
        message: "Kindly select an operation:",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
])

// Perform operation
if (answers.operation === "Addition") {
    console.log(`The sum of ${answers.num1} and ${answers.num2} is : ${answers.num1 + answers.num2}`);
} else if (answers.operation === "Subtraction") {
    console.log(`The difference of ${answers.num1} and ${answers.num2} is : ${answers.num1 - answers.num2}`);
} else if (answers.operation === "Multiplication") {
    console.log(`The product of ${answers.num1} and ${answers.num2} is : ${answers.num1 * answers.num2}`);
} else if (answers.operation === "Division") {
    console.log(`The quotient of ${answers.num1} and ${answers.num2} is : ${answers.num1 / answers.num2}`);
}