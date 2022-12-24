// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
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
        message: 'How would a user use your application?'
    },
    // {   //previous contributors
    //     type: 'confirm',
    //     name: 'contributors',
    //     message: 'Where there any contributors on this project?'
    // },
    {   // contribution guidelines
        type: 'input',
        name: 'futureContributors',
        message: 'What would a user need to do in order to contribute to your application?'
    },
    {   //test instructions
        type: 'input',
        name: 'test',
        message: 'How would a user test your application?'
    },
    {   //liscence option list
        type: 'checkbox',
        name: 'liscense',
        choices: ['MIT',  'Apache v2.0', 'GNU General Public Liscense v3.0']
        //need to set additional choice options to disabled as to describe each liscence's purposes
    },
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then(answers => {
        fs.writeFile("README.md", generateREADME(answers), (err) => {
            err ? console.error(err) : console.log('Your README has been generated!');
        })
    })
}
// Function call to initialize app
init();

