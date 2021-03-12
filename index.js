const fs = require('fs')
const { prompt } = require('inquirer')
let licenseBadge = ''

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
      message: 'Give a description of your project.'
    },
    {
      type: 'input',
      name: 'solve',
      message: 'What problem does your project solve?'
    },
    {
      type: 'input',
      name: 'install',
      message: 'Give instructions how to install your project.'
    },
    {
      type: 'input',
      name: 'gif',
      message: 'Enter your gif location.'
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
        licenseBadges(res.license)
        console.log(licenseBadge)

      }
      else {
        console.log('Start again')
        go()
      }
    })
    .catch(err => { console.log(err) })
}

const licenseBadges = (license) => {
  switch (license) {
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0))`
      break;
    case 'The Unlicensed':
      licenseBadge = `[The Unlicensed](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
      break;
    case 'ZLib':
      licenseBadge = `[ZLib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
      break;
  }
  return licenseBadge
}

const fillout = () => {
  let md = `
# ${res.projectTitle}

## Table of Contents


`
}
go()
