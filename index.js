// NODE MODULES

const inquirer = require('inquirer');
const fs = require('fs');


   inquirer.prompt ([
    {
        type: 'input',
        message: 'What is the title to your document',
        name: 'title',
    },

    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },

    {
        type: 'input',
        message: 'where do you live?',
        name: 'location',
    },

    {
        type: 'input',
        message: 'what is your email address?',
        name: 'email',
    },

    {
        type: 'input',
        message: 'what is your GitHub username?',
        name: 'GitHub',
    },
    {

        type: 'input',
        message: 'what is your LinkedIn?',
        name: 'LinkedIn',
    }
]).then(responses => {
    const html = buildHTML(responses)
})