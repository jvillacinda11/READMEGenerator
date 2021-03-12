const fillout = (res, licenseBadge, licenseLink) => {
  let md = `
# ${res.projectTitle}

${res.description}
${res.solve}
${res.install}
${res.gif}
${licenseBadge}
${licenseLink}

`

  return md;
}
module.exports = fillout