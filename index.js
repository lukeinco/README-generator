// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

const licenseOptions = ['MIT License',
    'Apache License 2.0',
    'GNU General Public License (GPL) 3.0',
    'BSD 3-Clause License',
    'none'
];
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Please input Project title.',
    name: 'title',
}, {
    type: 'input',
    message: 'Please provide a description of your project.',
    name: 'desciption',
}, {
    type: 'input',
    message: 'Please provide instructions for installation.',
    name: 'installation',
}, {
    type: 'input',
    message: 'Provide instructions and examples for use.',
    name: 'usage',
}, {
    type: 'input',
    message: 'Enter all contributions by team members',
    name: 'contribution',
}, {
    type: 'input',
    message: 'Please provide Test Instructions.',
    name: 'tests'
}, {
    type: 'input',
    message: 'Please provide your GitHub Username.',
    name: 'github'
},{
    type: 'input',
    message: 'Please provide your email.',
    name: 'email'
}, {
    type: 'list',
    message: 'Select license:',
    name: 'license',
    choices: licenseOptions,
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




// Function to write README file
function writeFile(fileName, data, license) {
    const [title, description, installation, usage, contribution, tests, github, email] = data;

    let licenseContent = '';
    if (license === 'none') {
        licenseContent = 'none';
    } else {
        licenseContent = `This is licensed under ${license}.`;
    }

    const readMe = `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Testing instructions](#testing instructions)
  - [License](#license)
  - [Questions](#questions)


  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Credits
  ${contribution}

  ## Testing instructions
  ${tests}

  ## License
  This Project is licenced under ${license}.

  ## Questions
  Questions? Contact:
  Email: ${email}
  GitHub: https://github.com/${github}
  `;

    fs.writeFile(fileName, readMe, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README created successfully!`);
        }
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const chosenLicense = answers.license;
        const data = Object.values(answers);
        writeFile('README.md', data, chosenLicense);
    });
}
