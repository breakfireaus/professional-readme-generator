// Packages and files needed for this project
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const generateMD = require('./scripts/generateMarkdown.js');

// Creates file Asynchronously
const writeFileAsync = util.promisify(fs.writeFile);

// Questions that will await input
