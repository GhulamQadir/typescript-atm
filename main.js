#! /usr/bin/env node
import inquirer from "inquirer";
let currentBalance = 40_00_0;
let pinCodeOfUser = 213234;
let pinAnswer = await inquirer.prompt({
    name: "pinNum",
    message: "Enter your  pin number",
    type: "number",
});
console.log(pinAnswer);
if (pinAnswer.pinNum === pinCodeOfUser) {
    // console.log("Pin Code Authorized!");
    let operationAnswer = await inquirer.prompt({
        name: "operation",
        message: "please Select an option",
        type: "list",
        choices: ["withdraw", "check balance"],
    });
    if (operationAnswer.operation === "withdraw") {
        let withDrawAmount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter your Amount",
        });
        if (withDrawAmount.amount <= currentBalance) {
            currentBalance -= withDrawAmount.amount;
            console.log(`You have ${currentBalance}Rs left in your account`);
        }
        else {
            console.log("Your current balance is less than the amount you want to withdraw! ");
        }
    }
    if (operationAnswer.operation === "check balance") {
        console.log(`Your current balance is ${currentBalance}Rs`);
    }
}
else {
    console.log("Incorrect pin code!");
}
