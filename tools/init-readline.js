/**
 * Create Readline interface
 */
const readline = require('readline');

const initReadline = () => readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = initReadline;