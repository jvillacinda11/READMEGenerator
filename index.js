const fs = require('fs')
const { prompt } = require('inquirer')

const go = function () {


  prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter your project title...'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a description of your project'
    },
    {
      type: 'input',
      name: 'install',
      message: 'Give instructions how to install your project.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How may people use your product?'
    },
    {
      type: 'list',
      name: 'license',
      choices: ['MIT', 'Apache2.0', 'The Unlicensed', 'ZLib']

    },
    {
      type: 'confirm',
      name: 'choice',
      message: 'Are you sure that you want changes to be saved to your README?'
    }
  ])
    .then(res => {
      if (res.choice) {
        console.log(res)
        licenseLink(res.license)

      }
      else {
        console.log('Start again')
        go()
      }
    })
    .catch(err => { console.log(err) })
}

const licenseLink = (license) => {
  let licenseLink = ''
  switch (license) {
    case 'MIT':
      licenseLink = `[MIT](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache2.0':
      licenseLink = `[Apache2.0](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'The Unlicensed':
      licenseLink = `[The Unlicensed](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
      break;
    case 'ZLib':
      licenseLink = `[ZLib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
      break;
  }
  return licenseLink
}

const fillout = () =>{
let md = `
# ${res.projectTitle}



`
}

go()
//MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//Apache2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//The Unlicensed[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
//ZLib [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)