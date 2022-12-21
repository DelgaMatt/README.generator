// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

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
const generateREADME = (answers) => {
return `# ${answers.title}

## Description

${answers.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#how to contribute)
- [Tests](#tests)
- [Questions?](#questions)

## Badges

${answers.badges}

## Installation

${answers.installation}

## Usage

${answers.usage}

![alt text](assets/images/screenshot.png)

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

${answers.liscense}

## How to Contribute

${answers.futureContributors}

## Tests

${answers.test}

## Questions
Here is a link to my Github profile:
${answers.github}

If you have any further questions about the application or how you can contribute, you can reach me by email at:
${answers.email}
`};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then (answers => {
        fs.writeFile("README.md", generateREADME(answers), (err) => {
            err ? console.error(err) : console.log('Success!')
        })
    })
}
// Function call to initialize app
init();
