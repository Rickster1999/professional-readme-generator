// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");


// TODO: Create an array of questions for user input
const questions = [
    
    {
        message: "What is the name of you project?",
        name: "title",
        default: "Project #1"
    },
    {
        message: "Please enter a discription of your project",
        name: "description",
        default: "A simple but impressive piece of work."
    },
    {
        message: "Please enter any installation instructions for your project.",
        name: "installation",
        default: "Click install"
    },
    {
        message: "How do you wish people to use your project?",
        name: "usage",
        default: "Follow the rules/information given"
    },
    {
        message: "Please enter any guidelines for future contributors.",
        name: "contributing",
        default: "Please contact the owner of the repository to make any additions"
    },
    {
        message: "Are there any tests needed for the project?",
        name: "tests",
        default: "Use mocha"
    },
    {
        type: "list",
        message: "Choose the license for your project:",
        choices: ["the MIT License", "Mozilla Public License 2.0", "Open Database License (ODbL)" ],
        name: "license",
        default: "the MIT License"
    },
    {
        message: "Please enter your Github user.",
        name: "github",
        default:"user1234"
    },
    {
        message: "Please enter your email.",
        name: "email",
        default: "user@gmail.com"
    }
];

prompt(questions).then((answers) => console.table(answers));

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();