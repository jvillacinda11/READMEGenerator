const fs = require('fs')
const { prompt } = require('inquirer')
const license = require('./license.js')
const fillout = require('./filllout.js')
let licenseBadge = ''
let licenseLink = ''
let md = ''

const go = function () {


  prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter your project title.'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a description of your project.'
    },
    {
      type: 'input',
      name: 'install',
      message: 'Give instructions how to install your project.'
    },
    {
      type: 'input',
      name: 'gif',
      message: 'Enter your location for your demo gif.'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Explain the tests you made for your projects.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter instructions for how to use project.'
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How may people contribute to your project?'
    },
    {
      type: 'list',
      name: 'license',
      choices: ['MIT', 'Apache2.0', 'The Unlicensed', 'ZLib']
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email...'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github username.'
    },
    {
      type: 'input',
      name: 'repo',
      message: 'Enter your project repository name'
    },
    {
      type: 'confirm',
      name: 'choice',
      message: 'Are you sure that you want this information to be saved to your README?'
    }
  ])
    .then(res => {
      if (res.choice) {
        licenseBadge = license.licenseBadges(res.license)
        licenseLink = license.licenseLinks(res.license)
        md = fillout(res, licenseBadge, licenseLink)
        fs.writeFile('README1.md', md, function (err) {
          if (err) return console.log(err);
          console.log('README1.md has been created');
        })

      }
      else {
        console.log('Start again')
        go()
      }
    })
    .catch(err => { console.log(err) })
}


go()