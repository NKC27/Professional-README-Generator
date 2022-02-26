
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./Utils/generateMarkdown.js");


function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function init() {

    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title to your repository?',
            name: 'Title',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'list',
            message: 'what licenses did you use?',
            name: 'License',
            choices: [
                'MIT',
                'Other',
                'N/A',
            ],
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'Username',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'input',
            message: 'Can you provide a link to your profile?',
            name: 'Profile_link',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'input',
            message: 'What languages were used to create your app? what was the usage?',
            name: 'Usage',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'input',
            message: 'What is the app used for?',
            name: 'App_Description',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'input',
            message: 'Why did you build this project, what was the motivation?',
            name: 'Why_Description',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'input',
            message: 'How do you install the app and what dependancies are needed?',
            name: 'Installation',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'input',
            message: 'What are the instructions on how to use your app?',
            name: 'Instructions',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'input',
            message: 'Can you provide a file path to a screen cast walk through of your app working?',
            name: 'Video_link',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'input',
            message: 'Can you provide a file path to a screenshot of the app working?',
            name: 'Screenshot',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'input',
            message: 'Is the project open to contributions?',
            name: 'Contribution',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },

        {
            type: 'input',
            message: 'what is your LinkedIn?',
            name: 'LinkedIn',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },
        {

            type: 'input',
            message: 'what is your email address?',
            name: 'Email',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value' } },
        },


    ]).then(function (data) {
        console.log(" File Generated! Thank You! ");
        writeToFile("README.md", generateMarkdown({ ...data }));
    });
}
init()