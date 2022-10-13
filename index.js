// Packages and files needed for this project
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const generateMD = require('./scripts/generateMarkdown.js');

// Creates file Asynchronously
const writeFileAsync = util.promisify(fs.writeFile);

// Questions that will await input from the user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'welcome',
            message: 'Welcome to the automated README.md Generator. \n I\'m going to ask you some questions that will help me generate your customized README.md file \n Let\'s get started! Press ENTER to continue.',
        },
        {
            type: 'input',
            name: 'title',
            message: 'Please input your title for the project exactly as it appears on Github? ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please input your project description. (What was your motive? Why did you build this project? What problem did it solve? What did you learn? ) ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please input your project installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'please input your project usage information.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please input your project credits.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please input your project testing instructions.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license applies to your project?',
            choices: ['Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'CDDL-1.0', 'EPL-2.0', 'GPL-2.0', 'LGPL-3.0', 'MIT', 'MPL-2.0', 'N/A'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
    ]);
};

// Function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFileAsync('./output/README.md', generateMD(answers)))
        .then(() => console.log('Successfully wrote READMD.md to your output folder'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();