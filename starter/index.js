const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Any steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your Project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT License', 'Apache 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNULGPLv3', 'Mozilla Public license 2.0','The Unlicense'],
    },
];

// function to write README file
inquirer.prompt(questions).then(answers => {
    const badge = answers.license.toLowerCase().replace(/ /g, '-');
    const readmeContent = generateMarkdown(answers);



// function to initialize program
function init() {

}

// function call to initialize program
init();
})