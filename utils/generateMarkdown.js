// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case `MIT License`:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case `Apache 2.0 License`:
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case `GNU General Public Liscense v3.0`:
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    default:
      return ` `;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case `MIT License`:
      return `(https://opensource.org/licenses/MIT)`;
    case `Apache 2.0 License`:
      return `(https://opensource.org/licenses/Apache-2.0)`;
    case `GNU General Public Liscense v3.0`:
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    default:
      return ` `;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'MIT License':
      return `Copyright 2023 Matthew Delgado<br><br>
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
      to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
      and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
          
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
          
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
      WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    case `Apache 2.0 License`:
      return `Copyright 2023 Matthew Delgado<br><br>
      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
        
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;
    case `GNU General Public Liscense v3.0`:
      return `Copyright (C) 2023 Matthew Delgado<br><br>
      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.

      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.`;
    default:
      return ``;
    }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${licenseBadge}
  ## <ins>Description
  ${data.description}
  ## <ins>Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions?](#questions)
  ## <ins>Installation
  ${data.installation}
  ## <ins>Usage
  ${data.usage}
  ## <ins>License
  This app is covered untder the ${data.license}<br>
  To find more information about this license: ${licenseLink}<br><br>
  ${licenseSection}
  ## <ins>Credits
  Contributors :
  ${data.github} <br>
  Here is a link to my Github profile:<br>
  (https://github.com/${data.github})
  ## <ins>Tests
  ${data.test}
  ## <ins>Questions

  If you have any further questions about the application or how you can contribute, you can reach me by email at:<br>
  ${data.email}
`;
}

module.exports = generateMarkdown;