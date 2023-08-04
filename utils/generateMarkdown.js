const licenseLinks = {
  MIT: ['MIT-yellow.svg', 'https://opensource.org/licenses/MIT'],
  Mozilla: ['MPL_2.0-brightgreen.svg', 'https://opensource.org/licenses/MPL-2.0'],
  ODbL: ['ODbL-brightgreen.svg', 'https://opendatacommons.org/licenses/odbl/'],
  Apache: ['Apache_2.0-blue.svg', 'https://opensource.org/licenses/Apache-2.0'],
  CC0: ['CC0_1.0-lightgrey.svg', 'http://creativecommons.org/publicdomain/zero/1.0/'],
  IBM: ['IPL_1.0-blue.svg', 'https://opensource.org/licenses/IPL-1.0'],
}


function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${licenseLinks[license][0]})]`
    } else {
    return ' ';
    }
  };


function renderLicenseLink(license) {
  if (license !== 'No Licence') {
    return `[${license} URL](${licenseLinks[license][1]})`
  } else {
    return ' ';
  }
};


function renderLicenseSection(license) {
  if (license !== 'No License') {
    return `## License
    This project uses the ${license} license. Click the link to view the license's webpage.`
   } else {
    return ' ';
   }
};

function renderLicenseNavigation(license) {
  if (license !== 'No License') {
    return `- [License](#license)`
  } else {
    return ' ';
  }
};

function generateMarkdown(data) {
  return `# ${data.title}
## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  - [Github](#github)
  - [Email](#email)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Visit my GitHub for more insight:  [${data.gitHub}'s GitHub](https://github.com/${data.gitHub}/)
  
  Please email me at [${data.email}](${data.email}) for further questions.`;
};

module.exports = {
  generateMarkdown,
};