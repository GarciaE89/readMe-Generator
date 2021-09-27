
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        // validate question 
        validate: projectName => {
            if(projectName){
                return true;
                
            } else{
                console.log('Please provide project title!');
            }
        }
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project (Required)',
        // validate project description
        validate: projectDesc => {
            if(projectDesc){
                return true;
            } else{
                console.log('Project description is required!');
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What steps are needed to install your project?'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project'


    },
    {
        type: 'confirm',
        name: 'contributionConfirm',
        message: 'Can other developers contribute to your repository?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can other Developers contribute?',
        when: ({ contributionConfirm }) => {
            if(contributionConfirm){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Which license would you like to include with this project?',
        name: 'license',
        choices: ['MIT', 'GPL_v3', 'AGPL']
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
    

    
])

// TODO: Create a function to write README file
// .then(function(data) {
//     fs.writeFile('README.md', generateMarkdown(data), function(err) {
//       if (err) {
//         return console.log(err);
//       }

//       console.log('Success!  Your readme is now in the myReadme folder.');
//     });
//   });


// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();