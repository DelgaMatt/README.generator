// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (!liscense) {
    return " ";
  } else {
    return `[![${liscense}](https://img.shields.io/badge/License-${liscense}-blue.svg)](https://opensource.org/licenses/${liscense})`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (liscense === 'MIT'){
    return `https://opensource.org/licenses/MIT`;
  } else if (liscense === `Apache v2.0`){
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (liscense === `GNU General Public Liscense v3.0`) {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else {
    return ` `;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## <ins>Description
  ${data.description}
  ## Table of Contents (Optional)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions?](#questions)
  ## <ins>Badges
  ${data.badges}
  ## <ins>Installation
  ${data.installation}
  ## <ins>Usage
  ${data.usage}
  ## <ins>License
  ${data.liscense}
  ## <ins>Credits
  ${data.futureContributors}
  ## <ins>Tests
  ${data.test}
  ## <ins>Questions
  Here is a link to my Github profile:
  ${data.github}
  If you have any further questions about the application or how you can contribute, you can reach me by email at:
  ${data.email}
`;
}

module.exports = {
  generateMarkdown
};

//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)