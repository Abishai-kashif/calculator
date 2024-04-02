//this module is for calculating the grade
import chalk from "chalk";
//making function for grading
const calGrade = (percentage) => {
    //this function is printing grade based on the percentage
    if (percentage >= 90 && percentage < 100) {
        console.log(`${chalk.blue("\nThe Grade is : ")}${chalk.greenBright("'A+'")}`);
    }
    else if (percentage >= 80 && percentage < 90) {
        console.log(`${chalk.blue("\nThe Grade is : ")}${chalk.greenBright("'A'")}`);
    }
    else if (percentage >= 70 && percentage < 80) {
        console.log(`${chalk.blue("\nThe Grade is : ")}${chalk.greenBright("'B'")}`);
    }
    else if (percentage >= 60 && percentage < 70) {
        console.log(`${chalk.blue("\nThe Grade is : ")}${chalk.yellowBright("'C'")}`);
    }
    else if (percentage >= 50 && percentage < 60) {
        console.log(`${chalk.blue("\nThe Grade is : ")}${chalk.yellowBright("'D'")}`);
    }
    else if (percentage >= 33 && percentage < 50) {
        console.log(`${chalk.blue("\nThe Grade is : ")}${chalk.yellowBright("'E'")}`);
    }
    else {
        console.log(`${chalk.blue("\nThe Grade is : ")}${chalk.redBright("'F'")}`);
    }
};
export { calGrade }; // Export the function
