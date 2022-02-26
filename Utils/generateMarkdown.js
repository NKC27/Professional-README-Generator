// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
    return `
    
# ${data.Title}

## Licence 

This project is licenced under:

![Github licence](https://img.shields.io/badge/license-${data.license}-blue.svg)
      
## GitHub Username
  ${data.Username}

# Table of Contents
   
- [Profile_link]
- [App_Description]
- [Usage]
- [Video_link]
- [Screenshot]
- [Why_Description]
- [Installation]
- [Instructions]
- [License]
- [Contribution]
- [Questions]

# Profile Link

Please see my profile for further documentation.
[GitHub Link](${data.Profile_link})

# Description

${data.App_Description}

# Usage

${data.Usage}

# Video of my app working

Please see below a walkthrough of my app.

![Video walk through](${data.Video_link})

# Screenshot

Please see screenshots of the app working.

![ScreenShot Of my app](${data.Screenshot})

# Why The app was built & my motivation

${data.Why_Description}

# Installation

Please follow the instructions to install the correct dependencies and how to run the app.

${data.Installation}

Please follow the instructions on how to use the app.

${data.Instructions}

# Licence

This project has the following license:

${data.License}

# Contributors

${data.Contribution}

# Questions:
If you have any questions contact me on [GitHub](https:github.com/${data.Username}) or contact 
${data.Profile_link} at ${data.Email}
`;
}

module.exports = generateMarkdown;
