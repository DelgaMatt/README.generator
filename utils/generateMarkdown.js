//This function returns a license badge for chosen License
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case `MIT License`:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case `Apache 2.0 License`:
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case `GNU General Public License v3.0`:
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    default:
      return ` `;
  }
};

//This function returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case `MIT License`:
      return `https://opensource.org/licenses/MIT`;
    case `Apache 2.0 License`:
      return `https://opensource.org/licenses/Apache-2.0`;
    case `GNU General Public License v3.0`:
      return `https://www.gnu.org/licenses/gpl-3.0`;
    default:
      return ` `;
  }
}

//This function returns the license text 
//If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);

  if(!license){
    return ``;
  } else {
    return `## <ins>License
  This app is covered under the [${license}](${licenseLink})<br>
  Copyright (C) Matthew Delgado 2023`
  }
};

//This function generates the markdown for the README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${licenseBadge}
  ## <ins>Description
  ${data.description}
  ## <ins>Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions?](#questions)
  ## <ins>Installation
  ${data.installation}
  ## <ins>Usage
  ${data.usage}
  ${licenseSection}
  ## <ins>Contributing
  Created by: ${data.github}
  <br>
  ${data.contribute}
  ## <ins>Tests
  ${data.test}
  ## <ins>Questions
  View this project repository on [Github](https://github.com/${data.github})<br>
  If you have any further questions about the application or how you can contribute, you can reach me by email at: ${data.email}
`;
}

module.exports = generateMarkdown;