

function generateMDFile(data) {
    return `# ${data.Title}
        
    ${data.Username}
    ## Table of Contents
   
    - [Profile_link]
    - [App_Description]
    - [Why_Description]
    - [Installation]
    - [Instructions]
    - [Video_link]
    - [Screenshot]
    - [Licence]
    - [Contribution]

    ### Profile Link

    Please see my profile for further documentation.
    [GitHub Link](${data.Profile_link})

    ### Description
    
    ${data.App_Description}

    ### Why The app was built & my motivation

    ${data.Why_Description}

    ### Installation

    Please follow the instructions to install the correct dependencies and how to run the app.

    ${data.Installation}

    Please follow the instructions on how to use the app.

    ${data.Instructions}

    ### Video of my app working

    Please see below a walkthrough of my app.

    ![Video walk through](${data.Video_link})

    ### Screenshot

    Please see screenshots of the app working.

    ![ScreenShot Of my app](${data.Screenshot})

    ![ScreenShot Of my app](${data.Screenshot2})

    ![ScreenShot Of my app](${data.Screenshot3})

    ### Licence

    This project has the following licence:

    ${data.Licence}

    ### Contributors

    ${data.Contribution}

    ### Questions:
    If you have any questions contact me on [GitHub](https:github.com/${data.username}) or contact 
    ${data.author} at ${data.email}
    `;
  }
  
  module.exports = generateMDFile;
  