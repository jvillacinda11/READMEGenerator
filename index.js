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
        licenseBadge = license.licenseBadges(res.license)
        console.log(licenseBadge)
        licenseLink = license.licenseLinks(res.license)
        console.log(licenseLink)
        md = fillout(res, licenseBadge, licenseLink)
        console.log(md)
        fs.writeFile('readmetest.md', md, function (err) {
          if (err) return console.log(err);
          console.log('it works!');
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