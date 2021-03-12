const fillout = (res, licenseBadge, licenseLink) => {
  let md =
    `# ${res.projectTitle}
 ${licenseBadge}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${res.install}

## Usage
${res.gif}

## Credits

## License
${licenseLink}

`

  return md;
}
module.exports = fillout
// ${res.description}
// ${res.solve}
// ${res.install}
// ${res.gif}
// ${licenseBadge}
// ${licenseLink}