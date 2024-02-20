// function to generate markdown for README
function generateMarkdown(answers) {
  //display badge based on user's selection
  let badge = '';
  if (answers.license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (answers.license === "Apache 2.0") {
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if
    (answers.license === "GNU AGPLv3") {
    badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  }
  if (answers.license === "GNU GPLv3") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (answers.license === "GNU GPLv3") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (answers.license === "GNU LGPLv3") {
    badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  }
  if (answers.license === "Mozilla Public license 2.0") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (answers.license === "The Unlicense") {
    badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
  if (answers.license === "IBM Public license 1.0") {
    badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }

  // Format the answers into a Markdown string
  return `# ${answers.title}
${badge}


## Description
${answers.description}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation
${answers.installation}


## Usage
${answers.usage}


## Credits/Collaborators
${answers.credits}


## License
This project is licensed under the ${answers.license} license.


## Contributing
${answers.contributing}


## Tests
${answers.tests}


## Questions
If you have any questions, you can reach me at ${answers.email}.

You can also view my GitHub profile [here](https://github.com/${answers.github}).
`;
}

module.exports = generateMarkdown;
