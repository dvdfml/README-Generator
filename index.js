// Import packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of question objects for inquirer.prompt()
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation steps?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the instructions for testing?'
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license.",
        choices: ["Apache 2.0", "Boost", "GNU GPLv3", "MIT", "Mozilla", "Unlicense", "Other"]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// Function that writes the README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data);
    fs.writeFile(fileName, content, (err) => {
        err ? console.error(err) : console.log('README file created.');
    });
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('./result/README.md', response);
        });
}

// Function call to initialize app
init();
