// Module for calculate Percentage mode!

import chalk from "chalk";
import inquirer from "inquirer";
import { calGrade } from "./grade.js";


async function calPercentage(): Promise<void> {

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
        
        let percentage: number = Math.round((answers.obtained/answers.total) * 100)//calculating percentage
        
        //printing percentage
        console.log(`${chalk.blue(`The percentage of ${answers.obtained} out of ${answers.total} is :`)} ${chalk.yellowBright(percentage)}${chalk.yellowBright("%")}`);

        console.log();//printing new line
        
        //asking user if he wana get result
        let checks = await inquirer.prompt([
            {
                name: "check",
                type: "confirm",
                message: chalk.yellow("Would you like to check your result?"),
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
        console.log(chalk.red("Total marks should be greater than obtained marks."));//telling user that total marks should be greater than obtained marks
    };
};

export { calPercentage };   // Export the function