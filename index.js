// External Packages
const inquirer = require('inquirer');
const fs = require('fs');
//Internal Modules
const generateMarkdown = require("./utils/generateMarkdown.js");

//Array of Questions
const questions = [
    {   //github username
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {   //email address
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }, 
    {   //project title
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {   //description
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project'
    },
    {   //installation instructions
        type: 'input',
        name: 'installation',
        message: 'Enter instructions to install your application'
    },
    {   //usage information
        type: 'input',
        name: 'usage',
        message: 'How would one use your application?'
    },
    {   // contribution guidelines
        type: 'input',
        name: 'contribute',
        message: 'Enter instructions for how to contribute to your project'
    },
    {   //test instructions
        type: 'input',
        name: 'test',
        message: 'How would one test this application?'
    },
    {   //license option list
        type: 'list',
        name: 'license',
        choices: ['MIT License', 'Apache 2.0 License', 'GNU General Public License v3.0']
    },
];

//Function to initialize app and write file
const initReadme = () => {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile("test.md", generateMarkdown(answers), (err) => {
        err ? console.error(err) : console.log('Your README has been generated!');
        })
    })
}

initReadme();

