// Module for calculate Numbers mode!
import chalk from "chalk";
import inquirer from "inquirer";
async function calNumbers() {
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
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponent", "Modulus"],
        }
    ]);
    console.log(""); //adding a line space between questions & answer
    // Perform operation
    if (answers.operation === "Addition") {
        console.log(`${chalk.blue(`The sum of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 + answers.num2)}`);
    }
    else if (answers.operation === "Subtraction") {
        console.log(`${chalk.blue(`The difference of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 - answers.num2)}`);
    }
    else if (answers.operation === "Multiplication") {
        console.log(`${chalk.blue(`The product of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 * answers.num2)}`);
    }
    else if (answers.operation === "Division") {
        console.log(`${chalk.blue(`The quotient of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 / answers.num2)}`);
    }
    else if (answers.operation === "Exponent") {
        console.log(`${chalk.blue(`The Exponent of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 ** answers.num2)}`);
    }
    else if (answers.operation === "Modulus") {
        console.log(`${chalk.blue(`The remainder of ${answers.num1} and ${answers.num2} is :`)} ${chalk.yellowBright(answers.num1 % answers.num2)}`);
    }
    else {
        console.log("Invalid number");
    }
    ;
}
;
export { calNumbers }; // Export the function
