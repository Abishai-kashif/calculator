#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { calGrade } from "./grade.js"; // Adjust the path to match your actual file structure


const lightBlue = chalk.hex("#8aecff")//creating custom color

// Welcome message
console.log(chalk.blue("\n\t\t\t------------------------"),);
console.log(`\t   ${chalk.red("<")}${chalk.blue("==========")}${chalk.red(">")} ${lightBlue.bold("WELCOME TO MY CALCULATOR")} ${chalk.red("<")}${chalk.blue("==========")}${chalk.red(">")}`);
console.log(chalk.blue("\t\t\t------------------------\n\n"));



    // Asking user to select mode
let modes = await inquirer.prompt(
    {
        name : "mode",
        type : "list",
        message : chalk.yellow.bold("Select the Mode"),
        choices : ["Calculate-Numbers Mode",
                    "Calculate-Percentage Mode"]
    }
);

// message indicating the mode selected
if (modes.mode === "Calculate-Numbers Mode") {
    console.log(`\n\t\t\t${lightBlue.italic(modes.mode)}`);
    console.log(`\t\t\t${chalk.blue("----------------------")}\n`);

} else {
    console.log(`\n\t\t\t${lightBlue.italic(modes.mode)}`);
    console.log(`\t\t\t${chalk.blue("-------------------------")}\n`);
}

// code for numbers mode 
if (modes.mode === "Calculate-Numbers Mode") {

    // Ask user for input
    const answers = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: chalk.yellow("Kindly enter your first number:"),
        },
        {
            name: "num2",
            type: "number",
            message: chalk.yellow("Kindly enter your second number:"),
        },
        {
            name: "operation",
            type: "list",
            message: chalk.yellow("Kindly select an operation:"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division" , "Exponent" ,"Modulus"],
        }
    ])

    console.log("")//adding a line space between questions & answer

    // Perform operation
    if (answers.operation === "Addition") {
        console.log(`${chalk.blue(`The sum of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 + answers.num2)}`);
    } else if (answers.operation === "Subtraction") {
        console.log(`${chalk.blue(`The difference of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 - answers.num2)}`);
    } else if (answers.operation === "Multiplication") {
        console.log(`${chalk.blue(`The product of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 * answers.num2)}`);
    } else if (answers.operation === "Division") {
        console.log(`${chalk.blue(`The quotient of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 / answers.num2)}`);
    } else if (answers.operation === "Exponent") {
        console.log(`${chalk.blue(`The Exponent of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 ** answers.num2)}`);
    }else if (answers.operation === "Modulus") {
        console.log(`${chalk.blue(`The remainder of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 % answers.num2)}`);
    }else {
        console.log("Invalid number");
    };
};


// code for percentage mode
if (modes.mode === "Calculate-Percentage Mode") {

    // Ask user for input
    const answers = await inquirer.prompt([
        {
            name: "total",
            type: "number",                 
            message: chalk.yellow("Kindly enter your total marks:")
            
        },
        {
            name: "obtained",
            type: "number",
            message: chalk.yellow("Kindly enter your obtained marks:")
        }
    ]);

    console.log("")//adding a line space between questions & answer

    if (answers.total > answers.obtained) {
        
        let percentage: number = Math.floor((answers.obtained/answers.total) * 100)//calculating percentage
        
        //printing percentage
        console.log(`${chalk.blue(`The percentage of ${answers.obtained} out of ${answers.total} is :`)} ${chalk.yellowBright(percentage)}${chalk.yellowBright("%")}`);

        //asking user if he wana get result
        let checks = await inquirer.prompt([
            {
                name: "check",
                type: "confirm",
                message: chalk.yellow("\nWould you like to check your result?"),
                default: true
            }
        ]);

        //print if user is passed or failed
        if (checks.check) {
            if (percentage >= 33) {
                console.log(chalk.greenBright("Congratulations !! You have passed the exam\n"));
            } else {
                console.log(chalk.redBright("Sorry !! You have failed the exam\n"));
            };
        };

        
        //asking user if he wana get grade
        let grades = await inquirer.prompt([
            {
                name: "grade",
                type: "confirm",
                message: chalk.yellow("Would you like to check your Grade?"),
                default: true
            }
            ]);
        
            //print grade
        if (grades.grade) {
            calGrade(percentage); //calling grade function
        };

    } else {
        console.log(chalk.red("Invalid value"));//if user enters invalid value
    };
};