//packages
const fs = require("fs");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const {generateMarkdown, renderLicenseBadge ,renderLicenseSection} = require('./utils/generateMarkdown.js');

//questions for the readme
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
        choices: ['MIT', 'Mozilla', 'ODbL', 'Apache', 'CC0', 'IBM', 'No License' ],
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

// function to write the readme file
function writeToFile(fileName, answers) {
    fs.writeFileSync(fileName, generateMarkdown(answers));
};

function init() {
    prompt(questions).then((answers) => writeToFile('ex-README.md', answers));
};

// Function call to initialize app
init(); 