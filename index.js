
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMDFile = require("./Utils/generateMDFile");
    

function writeToFile(fileName, data) {
  
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function init() {
  
  inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title to your repository?',
        name: 'Title',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Username',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'Can you provide a link to your profile?',
        name: 'Profile_link',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'What is the app used for?',
        name: 'App_Description',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'Why did you build this project, what was the motivation?',
        name: 'Why_Description',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'How do you install the app and what dependancies are needed?',
        name: 'Installation',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'What are the instructions on how to use your app?',
        name: 'Instructions',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'Can you provide a file path to a screen cast walk through of your app working?',
        name: 'Video_link',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'Can you provide a file path to a screenshot of the app working?',
        name: 'Screenshot',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'Can you provide a file path to a 2nd screenshot of the app working?',
        name: 'Screenshot2',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'Can you provide a file path to a 3rd screenshot of the app working?',
        name: 'Screenshot3',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },


    {
        type: 'list',
        message: 'what licences did you use?',
        name: 'Licence',
        choices: ['MIT licence', 'The GPL licence', 'Apache licence', 'GNU licence', 'Other', 'N/A',],
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
    },

    {
        type: 'input',
        message: 'Is the project open to contributions made from third parties?',
        name: 'Contribution',
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
        message: 'what is your email address?',
        name: 'Email',
        validate: (value) => { if(value){return true}else{return 'Please enter a value'}},
        }
        
    ]).then(function(data) {   
      console.log("Generating Markdown File...");   
      writeToFile("README.md", generateMDFile({...data}));  
});
}
init()