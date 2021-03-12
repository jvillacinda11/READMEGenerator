const licenseBadges = (license) => {
  switch (license) {
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0))`
      break;
    case 'The Unlicensed':
      licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
      break;
    case 'ZLib':
      licenseBadge = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
      break;
  }
  return licenseBadge
}
const licenseLinks = (license) => {
  switch (license) {
    case 'MIT':
      licenseLink = `[MIT](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache2.0':
      licenseLink = `[Apache2.0](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'The Unlicensed':
      licenseLink = `[The Unlicensed](http://unlicense.org/)`
      break;
    case 'ZLib':
      licenseLink = `[ZLib](https://opensource.org/licenses/Zlib)`
      break;
  }
  return licenseLink
}
const f = () => {
  console.log('it works!')
}


module.exports = {
licenseBadges,
licenseLinks,
f
};