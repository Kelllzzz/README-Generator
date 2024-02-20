const inquirer = require('inquirer');
const fs = require("fs");
const path = require('path');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Any steps required to install your project?:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your Project? / Add a screenshot of your webpage using ![alt text](../images/screenshot.jpg):',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators/team members if you worked on the project as a group and include links to their GitHub profiles/social media accounts:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNULGPLv3', 'Mozilla Public license 2.0','The Unlicense', 'IBM Public license 1.0'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to the project?:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can your project be tested?:',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Add your github username so users can ask questions:',
    },
];

// function to write README file
inquirer.prompt(questions).then(answers => {

    const readmeContent = generateMarkdown(answers);
    
    fs.writeFile('README.md', readmeContent, err => {
if (err) {
    console.log('Please input all answers')
}
        console.log('Your README.md has been created!');
    });
});
