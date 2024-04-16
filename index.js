#!/usr/bin/env node
// importing modules
import inquirer from "inquirer";
import chalk from "chalk";
import { calPercentage } from "./PercentageMode.js";
import { calNumbers } from "./NumbersMode.js";
const lightBlue = chalk.hex("#8aecff"); //creating custom color
// Welcome message
console.log(chalk.blue("\n\t\t\t------------------------"));
console.log(`\t   ${chalk.red("<")}${chalk.blue("==========")}${chalk.red(">")} ${lightBlue.bold("WELCOME TO MY CALCULATOR")} ${chalk.red("<")}${chalk.blue("==========")}${chalk.red(">")}`);
console.log(chalk.blue("\t\t\t------------------------\n\n"));
// Asking user to select mode
let modes = await inquirer.prompt({
    name: "mode",
    type: "list",
    message: chalk.yellow.bold("Select the Mode"),
    choices: ["Calculate-Numbers Mode",
        "Calculate-Percentage Mode"]
});
// message indicating the mode selected
if (modes.mode === "Calculate-Numbers Mode") {
    console.log(`\n\t\t\t${lightBlue.italic(modes.mode)}`);
    console.log(`\t\t\t${chalk.blue("----------------------")}\n`);
}
else {
    console.log(`\n\t\t\t${lightBlue.italic(modes.mode)}`);
    console.log(`\t\t\t${chalk.blue("-------------------------")}\n`);
}
// if numbers mode
if (modes.mode === "Calculate-Numbers Mode") {
    await calNumbers(); //calling numbers mode
}
;
// if percentage mode
if (modes.mode === "Calculate-Percentage Mode") {
    await calPercentage(); //calling percentage mode
}
;
