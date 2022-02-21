// NODE MODULES

const inquirer = require('inquirer');
const fs = require('fs');


   inquirer.prompt ([
    {
        type: 'input',
        message: 'What is the title to your repository?',
        name: 'title',
        // Validation to check that a value has been added
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'What the app is for?',
        name: 'app_Description',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'why_Description',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'prob_Description',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'list',
        message: 'what licences did you use?',
        name: 'licence',
        choices: ['MIT licence', 'The GPL licence', 'Apache licence', 'GNU licence', 'Other', 'N/A',],
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'Were there any contributions made?',
        name: 'licence',
        choices: ['MIT licence', 'The GPL licence', 'Apache licence', 'GNU licence', 'GVL-GPL licence', 'N/A',],
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'what is your LinkedIn?',
        name: 'LinkedIn',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'what is yourx email address?',
        name: 'Email',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    }
]).then(inputData => {
    fs.writeFile('README.md', JSON.stringify(inputData, null, 2, (err)=>{
        if(err) {
            console.error(err)
        } else {
            console.log('Thank you')
        }
    }))
}) 