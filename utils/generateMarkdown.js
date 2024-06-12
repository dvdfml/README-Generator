// Function that returns a license badge based on which license is passed in
// If there is no match for that license, returns an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no match for that license, returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'Boost':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Mozilla':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'Unlicense':
      return 'http://unlicense.org/';
    default:
      return '';
  }
}

// Function that returns the license section of README
// If license = other, return an empty string
function renderLicenseSection(license) {
  if (license != 'Other') {
    return `${license}: ${renderLicenseLink(license)}`;
  } else {
    return '';
  };
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
- Github: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}
  `;
}

//Export generateMarkdown function
module.exports = generateMarkdown;
