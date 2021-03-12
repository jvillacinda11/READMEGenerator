const fillout = (res, licenseBadge, licenseLink) => {
  let md =
    `# ${res.projectTitle}
 ${licenseBadge}
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/${res.github}/${res.repo})


 ## Description
${res.description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation
${res.install}


## Usage

### Demo

![](${res.gif})


${res.usage}


## License
${licenseLink}


## Contribution

Help out by sumbitting a new [issue](https://github.com/${res.github}/${res.repo}/issues).


${res.contribute}

## Tests
${res.test}

## Questions

If you have any question please feel free to contact me via my email: ${res.email}

My Github profile is [${res.github}](https://github.com/${res.github})
`

  return md;
}
module.exports = fillout